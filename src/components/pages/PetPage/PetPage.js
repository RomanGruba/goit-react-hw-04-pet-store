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

  handleGoBack = () => {
    this.props.history.push('/pets');
  };

  render() {
    const { currentPet } = this.state;
    return (
      <div>
        {currentPet ? (
          <SinglePet pet={currentPet} onGoBack={this.handleGoBack} />
        ) : (
          <h1>No such animal!</h1>
        )}
      </div>
    );
  }
}
