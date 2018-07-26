// src/components/Nav/index.js
import React, { Component } from 'react';

import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import '../../index.css';

export class Header extends Component {

  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Fortnite Battle</h3>
          <Nav className="nav nav-masthead justify-content-center">
            <NavLink className="nav-link" exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
            <NavLink className="nav-link" to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
            <NavLink className="nav-link" to="/battle" activeClassName="active" tag={RRNavLink}>Battle</NavLink>
          </Nav>
        </div>
      </header>
    );
  }
}
