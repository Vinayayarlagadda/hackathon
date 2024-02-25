import React, { useState } from 'react';
//import hunger from './hunger.png';
import './checkbox.css'; // Importing CSS file for styling

const CheckboxAndRadioPage = () => {
  const [checkedItems, setCheckedItems] = useState({}); // State to keep track of checked items
  const [selectedOption, setSelectedOption] = useState('');
  const [availableLocations, setAvailableLocations] = useState('');

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked }); // Update checkedItems state
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLocationChange = (event) => {
    setAvailableLocations(event.target.value);
  };

  return (
    <>
    {/*<img src={hunger}/>*/}
    <div className="centered-container">
      <div className="content-container">
        <h2>Be A Volunteer</h2>
        <input
          type="text"
          placeholder="Food Available Locations"
          value={availableLocations}
          onChange={handleLocationChange}
        />
        <div>
          <h3>Food</h3>
          <label>
            <input
              type="checkbox"
              name="checkbox1"
              checked={checkedItems.checkbox1 || false}
              onChange={handleCheckboxChange}
            />
            Looking Good..!
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="checkbox2"
              checked={checkedItems.checkbox2 || false}
              onChange={handleCheckboxChange}
            />
            Smells Normal
          </label>
        </div>
        <div>
          <h3>Food Can be Served to:</h3>
          <label>
            <input
              type="radio"
              name="radioOption"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleRadioChange}
            />
            People
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="radioOption"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleRadioChange}
            />
            Pets
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="radioOption"
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleRadioChange}
            />
            Reject Food
          </label>
        </div>
      </div>
    </div>
    </>
  );
};

export default CheckboxAndRadioPage;