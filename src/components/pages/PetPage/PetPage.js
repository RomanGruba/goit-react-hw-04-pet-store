import React from 'react';
import styles from './PetPage.module.css';

const PetPage = ({ item }) => {
  const { name, image, breed, gender, color, description } = item;
  return (
    <>
      <img src={image} alt="pet card" />
      <h3>{name}</h3>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <span>Breed: </span>
          <span>{breed}</span>
        </div>
        <div className={styles.statsItem}>
          <span>Gender: </span>
          <span>{gender}</span>
        </div>
        <div className={styles.statsItem}>
          <span>Color: </span>
          <span>{color}</span>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default PetPage;
