import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import searchIcon from '../assets/symbols/SearchButton.png';

function SearchBar() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const history = useHistory();

  const handlenameChange = (e) => {
    setName(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    // do something with name and city

    // for now error page
    history.push('/errorPage');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" placeholder="Name of Place" value={name} onChange={handlenameChange} className="input-bar" style={{borderRight: 'solid'}}/>
      </label>
      <label>
        <input type="text" placeholder="City" value={city} onChange={handleCityChange} className="input-bar"/>
      </label>
      <button type="submit" onClick={handleSubmit}
        style={{ backgroundColor: '#DD9500', padding: '5px 0px', border: 'solid', borderColor: 'black', cursor: 'pointer' }}>
        <img src={searchIcon} style={{
          width: '28px',
          height: '28px',
          }} alt=""></img>
      </button>
    </form>
  );
}

export default SearchBar;
