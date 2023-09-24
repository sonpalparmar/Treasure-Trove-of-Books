import React, { useState } from 'react';
import '../title/Title.css';
import data from '../jsonData/index'
import DefaultData from '../defaultResult/index.jsx';

const PublishYear = () => {
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (startYear && endYear) {
      searchByPublishYear(startYear, endYear);
    } else {
      setDefaultResults();
    }
  };

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const searchByPublishYear = (start, end) => {
    const results = data.filter((item) => item.YEAR >= start && item.YEAR <= end);
    setSearchResults(results);
  };

  const setDefaultResults = () => {
    setSearchResults([]);
  };

  return (
    <div>
      <div className='searchBar'>
      <form onSubmit={handleSearch}>
        
        <input
          type="number"
          placeholder="Start Year"
          value={startYear}
          onChange={handleStartYearChange}
          
        />
        &nbsp;
        <input
          type="number"
          placeholder="End Year"
          value={endYear}
          onChange={handleEndYearChange}
          
        />
        &nbsp;
        <button type="submit">Search</button>
       
      </form>
      </div>

      {searchResults.length > 0 ? (
        <ul className="card-list" style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {searchResults.map((book) => (
          <li key={book.SR_NO}>
          <div className="card" style={{ width:'300px',height:'350px', border: '2px solid pink',margin: '10px',borderRadius:'10px', padding:'10px'}}>
            {/* Your card body content goes here */}
            <div className='item_img'>
            <img src={book.IMAGE} alt="" />
            </div>
            <div>Title: {book.TITLE}</div>
            <div>Author: {book.AUTHORS}</div>
            <div>Subject: {book.SUBJECT}</div>
            <div>Year: {book.YEAR}</div>
          </div>
        </li>            
        ))}
      </ul>
      ) : (
        <DefaultData />
      )}
    </div>
  );
};

export default PublishYear;
