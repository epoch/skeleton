import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class About extends Component {
  render() {
    return (
      <div className="about-view">
        <h1>about</h1>
        <Link to="/users">users</Link>
      </div>
    )
  }
}

export default About;
