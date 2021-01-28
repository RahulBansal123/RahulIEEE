import React, { useEffect, useState } from 'react';
import './Home.css';
import Dropdown from 'react-dropdown';
import Product from '../Product/Product';
import 'react-dropdown/style.css';
const Home = () => {
  const [prod, setProd] = useState([]);
  const [local, setLocal] = useState([]);
  const data = [];
  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const a = localStorage.key(i);
      const b = JSON.parse(localStorage.getItem(a));
      data.push(b);
    }
    setProd(data);
    setLocal(data);
  }, []);

  const filterResult = (e) => {
    const finalData = local.filter((prod) => {
      return (
        prod.Name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setProd(finalData);
  };

  const options = [
    { value: '100000', label: 'Under 1 Lac' },
    { value: '50000', label: 'Under 50K' },
    { value: '20000', label: 'Under 20K' },
    { value: '10000', label: 'Under 10K' },
  ];
  const handleChange = (selectedOption) => {
    const finalData = local.filter((prod) => {
      return parseInt(prod.Price) < selectedOption.value;
    });
    setProd(finalData);
  };

  const a = prod.map((b) => {
    return (
      <Product
        key={b.Name}
        name={b.Name}
        brand={b.Brand}
        img={b.Image}
        price={b.Price}
        ram={b.RAM}
        rom={b.ROM}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="Search">
        <div className="Dropdown">
          <Dropdown
            options={options}
            onChange={handleChange}
            value={options[0]}
            placeholder="Select an option"
          />
        </div>
        <input placeholder="Type here..." onChange={(e) => filterResult(e)} />
      </div>
      <div className="Home">{a}</div>
    </React.Fragment>
  );
};

export default Home;
