import React from 'react';
import { Link } from 'react-router-dom';
import './Webpage.css';
import {useAuth} from './Authentication';



function Web() {
  const {currentUser, logout} = useAuth();
  
  const handlelogout =() => {
    const a = window.confirm("ARE YOU SURE YOU WANT TO LOGOUT ?");
    if(a)
    {
      logout();

    }
    else 
    {
       window.location.href = './web';
    }
  }
  return (
    <div>
      <header>
        <h1 className='bar'>DEV@Deakin</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="query">Query</Link>
            </li>

          </ul>
        </nav>
        {/* Add the search bar here */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button" >Search</button>
          {currentUser ? (
            <Link className="log" to="/" onClick={handlelogout}>Log Out</Link>
          ):(
            <Link className="log" to="/login">Log In</Link>
          )}
          
        </div>

      </header>
    </div>
  );
}

export default Web;
