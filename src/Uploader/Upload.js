import React, { useState } from 'react';
import './Upload.css';
const Upload = () => {
  const [Name, setName] = useState('');
  const [Brand, setBrand] = useState('');
  const [Price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [Ram, setRam] = useState('');
  const [Rom, setRom] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  let image = null;
  const handleSubmit = () => {
    if (Name && Brand && Price && Ram && Rom && imagePreview) {
      const data = {
        Name: Name,
        Brand: Brand,
        Price: Price,
        Color: color,
        RAM: Ram,
        ROM: Rom,
        Image: imagePreview,
      };
      localStorage.setItem(Name, JSON.stringify(data));
      alert('Product Added Successfully!');
      window.location.reload();
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    if (
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/png'
    ) {
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      e.target.value = null;
      alert('Pleas enter image only');
    }
  };

  if (imagePreview) {
    image = <img alt="Mobile Image" src={imagePreview} />;
  } else {
    image = 'Please select an Image for Preview';
  }
  return (
    <div className="Upload">
      <div className="Upload__details">
        <div className="Upload__preview">{image}</div>

        <div className="Upload__form">
          <div className="Upload__form_row">
            <div className="Upload__form_row_data">
              <label htmlFor="Name">Name</label>
              <input
                name="Name"
                type="text"
                required
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="Upload__form_row_data">
              <label htmlFor="Brand">Brand</label>
              <input
                name="Brand"
                type="text"
                placeholder=""
                value={Brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="Upload__form_row_data">
              <label htmlFor="Price">Price</label>
              <input
                name="Price"
                type="text"
                required
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>{' '}
            <div className="Upload__form_row_data">
              <label htmlFor="Color">Color</label>
              <input
                name="Color"
                type="text"
                required
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="Upload__form_row_data">
              <label htmlFor="RAM">RAM</label>
              <input
                name="RAM"
                type="text"
                required
                value={Ram}
                onChange={(e) => setRam(e.target.value)}
              />
            </div>
            <div className="Upload__form_row_data">
              <label htmlFor="Rom">ROM</label>
              <input
                name="Rom"
                type="text"
                required
                value={Rom}
                onChange={(e) => setRom(e.target.value)}
              />
            </div>
            <div className="Upload__form_row_data">
              <label htmlFor="Image">Image</label>
              <input
                name="Image"
                type="file"
                required
                onChange={(e) => handleImageChange(e)}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="Upload__form_submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
