import React from 'react';
import styles from './GalleryPage.module.css';
import PetPage from '../PetPage/PetPage';

const GalleryPage = ({ items }) => {
  return (
    <>
      <h2>Available pets</h2>
      <ul className={styles.gallery}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            <img src={item.image} alt="" />
            <p className={styles.name}>{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GalleryPage;
