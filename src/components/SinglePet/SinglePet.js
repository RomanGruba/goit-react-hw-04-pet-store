import React from 'react';
import styles from './SinglePet.module.css';

const SinglePet = ({ name, image, breed, gender, color, description }) => {
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

export default SinglePet;
