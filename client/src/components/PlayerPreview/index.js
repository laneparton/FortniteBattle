import React from 'react';
import PropTypes from 'prop-types';

function PlayerPreview (props) {
  return (
    <div className='columnWrapper'>
      <div>
        <h2 className='username'>{props.username}</h2>
        <h3 className='platform'>{props.platform}</h3>
      </div>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired
};

export default PlayerPreview;