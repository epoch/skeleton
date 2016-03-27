function users(prevState = [
  'mary',
  'jo',
  'lisa'
], action) {
  return prevState;
}

function appReducer(state = {}, action) {
  return {
    users: users(state.users, action)
  }
}

export default appReducer;
