// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import styles from './NewItem.module.css';
//
// function NewItem() {
//     const [newItem, setNewItem] = useState({});
//     const [url] = 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi';
//
//     useEffect(() => {
//         async function fetchNewData() {
//             try {
//                 const {data: {title, image, synopsis, unogsdate}} = await axios.get(url);
//                 setNewItem({
//                     title: title,
//                     image: image,
//                     synopsis: synopsis,
//                     unogsdate: unogsdate,
//                 });
//             } catch (e) {
//                 console.error(e);
//             }
//         }
//         fetchNewData()
//     }, []);
//
//
//     return (
//         <div className={styles['card-new']}>
//             {newItem && (
//                 <>
//                     <h2>{newItem.title}</h2>
//                     <img src={newItem.image} alt={newItem.title}/>
//                     <p>{newItem.synopsis}</p>
//                     <p>{newItem.unogsdate}</p>
//
//                 </>
//             )}
//         </div>
//     );
// }

// export default NewItem;