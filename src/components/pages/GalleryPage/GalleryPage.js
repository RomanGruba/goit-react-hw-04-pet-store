import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GalleryPage.module.css';

const GalleryPage = ({ items }) => {
  return (
    <>
      <h2>Available pets</h2>
      <ul className={styles.gallery}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            <Link to={`/pets/${item.id}`}>
              <img src={item.image} alt="" />
              <p className={styles.name}>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GalleryPage;

// const GalleryPage = ({ items }) => {
//   return (
//     <>
//       <h2>Available pets</h2>
//       <ul className={styles.gallery}>
//         {items.map(item => (
//           <li key={item.id} className={styles.item}>
//             <img src={item.image} alt="" />
//             <p className={styles.name}>{item.name}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
