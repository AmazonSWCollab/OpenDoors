import React, { useState } from 'react';

import searchIcon from '../assets/symbols/SearchButton.png';

function SearchBar() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handlenameChange = (e) => {
    setName(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with name and city
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" placeholder="Name of Place" value={name} onChange={handlenameChange} className="input-bar" style={{borderRight: 'solid'}}/>
      </label>
      <label>
        <input type="text" placeholder="City" value={city} onChange={handleCityChange} className="input-bar"/>
      </label>
      <button type="submit" style={{backgroundColor: '#DD9500', padding: '5px', border:'solid', borderColor:'black', cursor: 'pointer'}}>
        <img src={searchIcon} style={{
          width: '25px',
          height: '25px',
          }} alt=""></img>
      </button>
    </form>
  );
}

export default SearchBar;