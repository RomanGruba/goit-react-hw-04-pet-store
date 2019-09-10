import React from 'react';
import styles from './SinglePet.module.css';

const SinglePet = ({ name, image, breed, gender, color, description }) => {
  return (
    <section className={styles.singlePet}>
      <img src={image} alt="pet card" className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.stats}>
        <div className={styles.statsItem}>
          <span className={styles.statsDesciption}>Breed: </span>
          <span>{breed}</span>
        </div>
        <div className={styles.statsItem}>
          <span className={styles.statsDesciption}>Gender: </span>
          <span>{gender}</span>
        </div>
        <div className={styles.statsItem}>
          <span className={styles.statsDesciption}>Color: </span>
          <span>{color}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default SinglePet;
