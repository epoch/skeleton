import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { About, Home, Contact } from '../../components';
import { navigate } from '../../actions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    window.addEventListener('load', function() {
      dispatch(navigate(window.location.hash.slice(1)));
    }, false);
  }

  render() {
    const { dispatch, path } = this.props;
    return (
      <div>
        {this.getPageView()}
      </div>
    )
  }

  getPageView() {
    switch (this.props.path) {
      case '':
      case 'home': return <Home />
      case 'about': return <About testValue="win" />
      case 'contact': return <Contact />
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    path: state.route.path
  }
}

export default connect(mapStateToProps)(App);
