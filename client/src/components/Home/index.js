import React, { Component } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import '../../index.css';

class Home extends Component {

  render() {
    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

        <Header />
        
        <main role="main" className="inner cover">
        <h1 className="cover-heading">Show your friends who is boss!</h1>
        <p className="lead">This app allows you to compare & compete your Fortnite stats with your friends.</p>
        <p className="lead">
          <a href="/battle" className="btn btn-lg btn-secondary">Battle!</a>
        </p>
      </main>

        <Footer />
      </div>
    );
  }
}

export default Home;
