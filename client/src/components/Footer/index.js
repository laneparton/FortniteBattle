// src/components/Footer/index.js
import React, { Component } from 'react';

import '../../index.css';

export class Footer extends Component {

  render() {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>App Developed by <a href="https://laneparton.com/">Lane Parton</a>, using React + Express.</p>
        </div>
      </footer>
    );
  }
}
