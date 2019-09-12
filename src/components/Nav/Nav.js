import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const NavPage = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li className={styles.item}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/pets"
            className={styles.link}
            activeClassName={styles.active}
          >
            Pets
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            exact
            to="/about"
            className={styles.link}
            activeClassName={styles.active}
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavPage;
