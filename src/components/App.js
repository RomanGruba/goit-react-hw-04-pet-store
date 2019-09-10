import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import Nav from './Nav/Nav';
import PageNotFound from './pages/NotFoundPage/PageNotFound';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Nav />
        <div className={styles.container}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route
              path="/pets"
              render={() => <GalleryPage items={this.props.items} />}
            />
            <Route component={HomePage} />
          </Switch>
        </div>
      </>
    );
  }
}
