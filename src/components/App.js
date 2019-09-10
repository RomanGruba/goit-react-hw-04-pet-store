import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route
            path="/pets"
            render={() => <GalleryPage items={this.props.items} />}
          />
        </Switch>
      </div>
    );
  }
}
