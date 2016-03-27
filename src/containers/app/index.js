import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class App extends Component {

  render() {
    const { dispatch, path } = this.props;
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    path: state.route.path
  }
}

export default connect(mapStateToProps)(App);
