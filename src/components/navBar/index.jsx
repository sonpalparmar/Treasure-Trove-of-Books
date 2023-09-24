import React, { useState } from 'react';
import './nav.css'
import { Link } from 'react-router-dom';


const data = [
  {
    label: 'Title',
    to: '/'
  },
  
  {
    label: 'Author',
    to: '/author'
  },
  {
    label: 'Subject',
    to: '/subject'
  },
  {
    label: 'PublishYear',
    to: '/publishyear'
  }
  
];


const Navbar = () => {
const [selected,setSelected] =useState("Title")

  return (
               
  <div className='navbar'> 
      <div className='nav'>      
      Treasure Trove of Books
      </div> 
      <ul className='navbar_menu'>
      {data.map((item, key) => (        
            <li key={key} className='navbar_menu_item'  onClick={()=>{
              setSelected(item.label);
            }} >              
              <Link  className={`navbar_menu_item_link ${selected===item.label?"selected":null}`} to={item.to}>
               {item.label}
              </Link>              
            </li>           
      ))}
      </ul>       
  </div>  
  );
};


export default Navbar;
