// src/components/Battle/index.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';

import PlayerPreview from '../PlayerPreview';

import '../../index.css';

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      platform: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState(function () {
      return {
        [name]: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username,
      this.state.platform
    );
  }
  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            className='form-control'
            placeholder='Epic Games Username'
            type='text'
            name='username'
            value={this.state.username}
            autoComplete='off'
            onChange={this.handleChange}
          />
        </div>
        <div class="form-group">
          <label htmlFor="platform">Platform</label>
          <select className="form-control" id="platform" name="platform">
            <option value="pc">PC</option>
            <option value="xb1">Xbox</option>
            <option value="ps4">PS4</option>
          </select>
        </div>
        <button
          className='btn btn-primary mb-2'
          type='submit'
          disabled={!this.state.username}>
            Submit
        </button>
      </form>
    )
  }
}


PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOnePlatform: '',
      playerTwoPlatform: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(id, username, platform) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Platform'] = platform;
      return newState;
    });
  }
  handleReset(id) {
    this.setState(function () {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Platform'] = '';
      return newState;
    })
  }
  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerOnePlatform = this.state.playerOnePlatform;
    var playerTwoName = this.state.playerTwoName;
    var playerTwoPlatform = this.state.playerTwoPlatform;

    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

        <Header />
        
        <main role="main" className="inner cover">
            <div className='row'>
              {!playerOneName &&
                <PlayerInput
                  id='playerOne'
                  label='Player One'
                  onSubmit={this.handleSubmit}
                />}

              {playerOneName &&
                <PlayerPreview
                  username={playerOneName} platform={playerOnePlatform}>
                    <button
                      className='btn btn-primary mb-2'
                      onClick={this.handleReset.bind(this, 'playerOne')}>
                        Reset
                    </button>
                </PlayerPreview>}

              {!playerTwoName &&
                <PlayerInput
                  id='playerTwo'
                  label='Player Two'
                  onSubmit={this.handleSubmit}
                />}

              {playerTwoName &&
                <PlayerPreview
                  username={playerTwoName} platform={playerTwoPlatform}>
                    <button
                      className='btn btn-primary mb-2'
                      onClick={this.handleReset.bind(this, 'playerTwo')}>
                        Reset
                    </button>
                </PlayerPreview>}
            </div>

            {playerOneName && playerTwoName &&
              <Link
                className='btn btn-primary mb-2'
                to={{
                  pathname: match.url + '/results' + '/' + playerOneName + '/' + playerOnePlatform + '/' + playerTwoName + '/' + playerTwoPlatform
                }}>
                  Battle
              </Link>}
        </main>
        <Footer />
      </div>

    )
  }
}

export default Battle;