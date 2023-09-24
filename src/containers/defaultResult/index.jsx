import React from 'react';
import data from '../jsonData/index';

const DefaultData = () => {
  const defaultResults = data.slice(0, 10); // Get first 10 items from data array

  return (
    <ul className="card-list" style={{listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {defaultResults.map((book) => (
        <li key={book.SR_NO}>
        <div className="card" style={{ width:'250px',height:'350px', border: '2px solid #FF6D60',margin: '10px',borderRadius:'10px', padding:'10px'}}>
          {/* Your card body content goes here */}
          <div className='item_img'>
            <img src={book.IMAGE} alt="" />
          </div>
          <div className='item'>
          <div><b>Title:</b> {book.TITLE}</div>
          <div><b>Author:</b> {book.AUTHORS}</div>
          <div><b>Subject:</b> {book.SUBJECT}</div>
          <div><b>Year:</b> {book.YEAR}</div>
          </div>
        </div>
      </li>
      ))}
    </ul>
  );
};

export default DefaultData;
