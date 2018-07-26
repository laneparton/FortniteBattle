// src/components/NotFound/index.js
import React, { Component } from 'react';
import { Header } from '../Header'
import { Footer } from '../Footer'

import '../../index.css';

export default class NotFound extends Component {

  render() {
    return (
      <div className="404 cover-container d-flex h-100 p-3 mx-auto flex-column">

        <Header />

        <h1 id="not_found">
          404 <small>Not Found :(</small>
        </h1>

        <Footer />
      </div>
    );
  }
}