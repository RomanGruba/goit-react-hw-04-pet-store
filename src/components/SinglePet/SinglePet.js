import React from 'react';
import styles from './SinglePet.module.css';

const SinglePet = ({ pet, onGoBack }) => {
  const { name, image, breed, gender, color, description, age } = pet;
  return (
    <>
      <button type="button" className={styles.returnBtn} onClick={onGoBack}>
        &larr; Return
      </button>
      <section className={styles.singlePet}>
        <h2 className={styles.name}>All about {name}</h2>
        <div className={styles.container}>
          <img src={image} alt="pet card" className={styles.image} />
          {/* <h3 className={styles.name}>{name}</h3> */}
          <div className={styles.stats}>
            <div className={styles.statsItem}>
              <span className={styles.statsDesciption}>Age: </span>
              <span>{age}</span>
            </div>
            <div className={styles.statsItem}>
              <span className={styles.statsDesciption}>Gender: </span>
              <span>{gender}</span>
            </div>
            <div className={styles.statsItem}>
              <span className={styles.statsDesciption}>Color: </span>
              <span>{color}</span>
            </div>
            <div className={styles.statsItem}>
              <span className={styles.statsDesciption}>Breed: </span>
              <span>{breed}</span>
            </div>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </section>
    </>
  );
};

export default SinglePet;
