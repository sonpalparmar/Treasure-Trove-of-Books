import React, { useState } from 'react';
import '../title/Title.css';
import data from '../jsonData/index';
import DefaultData from '../defaultResult/index.jsx';


const Subject = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchBySubject(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchBySubject = (query) => {
    const results = data.filter((item) =>
      item.SUBJECT.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      {/* search bar */}
      <div>
      <form onSubmit={handleSearch}>
        <div className='searchBar'>
        <input
          type="text"
          placeholder="Search By Subject"
          value={searchTerm}
          onChange={handleChange}
          
        />
        &nbsp;
        <button type="submit">Search</button>
        </div>
      </form>
      </div>

      {/* show book */}
      <ul style={{padding:'0'}}>
      {searchResults.length > 0 ? (
        <ul className="card-list" style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {searchResults.map((book) => (
          <li key={book.SR_NO}>
          <div className="card" style={{ width:'300px',height:'350px', border: '2px solid #FF6D60',margin: '10px',borderRadius:'10px', padding:'10px'}}>
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
      </ul>
    </div>
  );
};

export default Subject;
