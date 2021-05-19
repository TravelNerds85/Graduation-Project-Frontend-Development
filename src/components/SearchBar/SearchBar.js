// import React, { useState } from 'react';
// import styles from './SearchBar.module.css';
// import BtnSearchDeleted from "../Buttons/BtnSearchDeleted";
//
//
// function SearchBar({ setLocationHandler }) {
//     const [query, setQuery] = useState('');
//
//     function handleClick() {
//         setLocationHandler(query);
//     }
//
//     function keyPressCheck(e) {
//         if (e.keyCode === 13) {
//             setLocationHandler(query);
//         }
//     }
//
//     return (
//         <span className="searchBar">
//       <input
//           type="text"
//           name="search"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyUp={keyPressCheck}
//           placeholder="Typ hier je bestemmingsland.."
//       />
//
//       <BtnSearchDeleted />
//     </span>
//     );
// }
//
// export default SearchBar;