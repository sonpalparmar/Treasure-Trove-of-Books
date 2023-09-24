import React, { useState } from 'react';
import './Title.css';
import data from '../jsonData/index';
import DefaultData from '../defaultResult/index';

const Title = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      searchByTitle(searchTerm);
    } else {
      setDefaultResults();
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchByTitle = (query) => {
    const results = data.filter((item) => {
      // Check if item.TITLE is a string before calling toLowerCase()
      if (typeof item.TITLE === 'string') {
        return item.TITLE.toLowerCase().includes(query.toLowerCase());
      }
      return false; // Return false for non-string titles
    });
    setSearchResults(results);
  };

  const setDefaultResults = () => {
    setSearchResults([]);
  };

  return (
    <div>
      <div>
      <form onSubmit={handleSearch}>
        <div className='searchBar'>
        <input 
          type="text"
          placeholder="Search By Title"
          value={searchTerm}
          onChange={handleChange}
        />
        &nbsp;
        <button type="submit">Search</button>
        </div>
      </form>
      </div>

      {searchResults.length > 0 ? (
        <ul className="card-list">
          {searchResults.map((book) => (
            <li key={book.SR_NO}>
            <div className="card">
              {/* Your card body content goes here */}
              <div className='item_img'>
                <img src={book.IMAGE} alt="" />
              </div>
              <div><b>Title: </b>{book.TITLE}</div>
              <div><b>Author: </b>{book.AUTHORS}</div>
              <div><b>Subject: </b>{book.SUBJECT}</div>
              <div><b>Year: </b>{book.YEAR}</div>
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

export default Title;
