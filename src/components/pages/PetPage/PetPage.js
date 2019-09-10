import React, { Component } from 'react';
import SinglePet from '../../SinglePet/SinglePet';
import pets from '../../pets.json';

export default class PetPage extends Component {
  state = {
    currentPet: {},
  };

  componentDidMount() {
    const currentPet = pets.find(pet => pet.id === this.props.match.params.id);
    this.setState({ currentPet });
  }

  render() {
    const { currentPet } = this.state;
    return (
      <div>
        {currentPet ? <SinglePet {...currentPet} /> : <h1>No such animal!</h1>}
      </div>
    );
  }
}

// const PetPage = ({ item }) => {
//   const { name, image, breed, gender, color, description } = item;
//   return (
//     <>
//       <img src={image} alt="pet card" />
//       <h3>{name}</h3>
//       <div className={styles.stats}>
//         <div className={styles.statsItem}>
//           <span>Breed: </span>
//           <span>{breed}</span>
//         </div>
//         <div className={styles.statsItem}>
//           <span>Gender: </span>
//           <span>{gender}</span>
//         </div>
//         <div className={styles.statsItem}>
//           <span>Color: </span>
//           <span>{color}</span>
//         </div>
//         <p>{description}</p>
//       </div>
//     </>
//   );
// };

// export default PetPage;
