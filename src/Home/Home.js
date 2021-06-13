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
      } else {
        const json = await response.json();
        setCategories(json);
        setIsLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    loadProducts();
    loadCategories();
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
