import React, { useState } from 'react';
import './Auther.css';
import '../title/Title.css';
import data from '../jsonData/index';
import DefaultData from '../defaultResult/index.jsx';

const Auther = () => {
  const [author, setAuthor] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(author);
    searchAuthors(author);
  };

  const handleChange = (e) => {
    setAuthor(e.target.value);
  };

  const searchAuthors = (query) => {
    const results = data.filter((item) =>
      item.AUTHORS.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className='author_search'>
      <div>
      <form onSubmit={handleSubmit}>
        <div className='searchBar'>
        <input
          id='search'
          placeholder='Search By Author'
          value={author}
          onChange={handleChange}
          
        />
        &nbsp;
        <button type="submit">Search</button>
        </div>
      </form>
      </div>
      <ul style={{padding:'0'}}>
      {searchResults.length > 0 ? (
        <ul className="card-list" style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {searchResults.map((book) => (
            <li key={book.SR_NO}>
              <div className="card" style={{ width:'300px',height:'350px', border: '2px solid #FF6D60',margin: '10px',borderRadius:'10px', padding:'10px'}}>
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

export default Auther;
