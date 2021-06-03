import React, { useState } from 'react';
import styles from './SearchBar.module.css';


function SearchBar({ setLocationHandler }) {
    const [query, setQuery] = useState('');

    function handleClick() {
        setLocationHandler(query);
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            setLocationHandler(query);
        }
    }

    return (
        <span className="searchBar">
      <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={keyPressCheck}
          placeholder="Enter destination"
      />

     <button className={styles['search-button']}
             type="button"
         onClick={handleClick}
     >
                Search
            </button>
    </span>
    );
}

export default SearchBar;
