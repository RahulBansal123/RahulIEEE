import React, { useEffect, useState, useCallback } from 'react';
import './Home.css';
import Dropdown from 'react-dropdown';
import Product from '../Product/Product';
import 'react-dropdown/style.css';

const Home = ({ addCart, setaddCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [data, setData] = useState(null);

  const loadProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      setData(json);
      setIsLoading(false);
      sessionStorage.setItem('products', JSON.stringify(json));
    } catch (err) {
      setError(err);
    }
  }, []);

  const loadCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      setCategories(json);
      setIsLoading(false);
      sessionStorage.setItem('category', JSON.stringify(json));
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem('products')) {
      loadProducts();
      loadCategories();
    } else {
      setData(JSON.parse(sessionStorage.getItem('products')));
      setCategories(JSON.parse(sessionStorage.getItem('category')));
    }
  }, []);

  const filterResult = (e) => {
    const finalData = data?.filter((prod) => {
      return (
        prod.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setSelectedCategoryData(finalData);
  };

  const options = [];
  if (categories) {
    for (const val in categories) {
      options.push({ value: categories[val], label: categories[val] });
    }
  }
  const handleChange = (selectedOption) => {
    const selected = data?.filter((prod) => {
      return prod.category === selectedOption.value;
    });
    setSelectedCategory(selectedOption);
    setSelectedCategoryData(selected);
  };

  const onRemove = (item) => {
    setaddCart(() => addCart.filter((cartItems) => cartItems.id !== item.id));
  };

  if (isLoading) return 'Loading...';
  if (error) return 'Some error occured. Please try again later...';

  return (
    <>
      <div className="Search">
        <div className="Dropdown">
          <Dropdown
            options={options}
            onChange={handleChange}
            placeholder="Select a category"
            value={selectedCategory}
          />
        </div>
        <input placeholder="Search Here..." onChange={filterResult} />
      </div>
      <div className="Home">
        {data && (
          <>
            {selectedCategoryData
              ? selectedCategoryData.map((item) => {
                  return (
                    <Product
                      key={item.id}
                      item={item}
                      addCart={addCart}
                      onClick={() => setaddCart(() => [...addCart, item])}
                      onRemove={() => onRemove(item)}
                    />
                  );
                })
              : data.map((item) => {
                  return (
                    <Product
                      key={item.id}
                      item={item}
                      addCart={addCart}
                      onClick={() => setaddCart(() => [...addCart, item])}
                      onRemove={() => onRemove(item)}
                    />
                  );
                })}
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(Home);
