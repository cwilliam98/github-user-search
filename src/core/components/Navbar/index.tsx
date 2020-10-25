import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

export const Navbar = () => (
  <nav className="row bg-primary main-nav">
    <div className="col-3">
      <Link to="/" className="nav-logo-text">
        <h4>Bootcamp DevSuperior</h4>
      </Link>
    </div>
    <div className="col-6 offset-2">
      <ul className="main-menu">
        <li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">PESQUISAR</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
