import React, { PropTypes } from 'react';
import './style.css';

var Home = React.createClass({

  render: function() {
    return (
      <div className="home-view">
        <h1>home</h1>
        <p>welcome</p>
      </div>
    )
  }

});

Home.propTypes = {}
export default Home;
