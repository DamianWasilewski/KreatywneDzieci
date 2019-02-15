import React from 'react';

import DrawerToggler from '../DrawerToggler/DrawerToggler';

import './Navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__toggle-button">
        <DrawerToggler click={props.drawerToggleHandler} />
      </div>
      <div className="navbar__navigation-items">
        <ul className="navbar__navigation-items_list">
          <li className="navbar__navigation-items_list-item">O nas</li>
          <li className="navbar__navigation-items_list-item">Urodzinki</li>
          <li className="navbar__navigation-items_list-item">Kontakt</li>
          <li className="navbar__navigation-items_list-item">Plan zajęć</li>
        </ul>
      </div>
    </nav>
  </header>
)

export default navbar;