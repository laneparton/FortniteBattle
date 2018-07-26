// src/components/About/index.js
import React, { Component } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';


import '../../index.css';

class About extends Component {

  render() {
    return (
      <div className="about cover-container d-flex h-100 p-3 mx-auto flex-column">

        <Header />

        <main role="main" className="inner cover">
        <h1 className="cover-heading">About</h1>
        <p className="lead">This app allows you to compare & compete your Fortnite stats with your friends.</p>
      </main>

      <Footer />
      </div>
    );
  }
}

export default About;