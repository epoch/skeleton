import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

var Users = React.createClass({

  propTypes: {
    users: PropTypes.array.isRequired,
  },

  render: function() {
    const { users } = this.props;
    return (
      <div className="users-view">
        <h1>users</h1>

        <ul>
        {users.map((user, index) => {
          return <li key={index}>{ user }</li>
        })}
        </ul>
      </div>
    )
  }

});

function mapStateToProps(state) {
  return {
      users: state.users
  }
}
export default connect(mapStateToProps)(Users);
