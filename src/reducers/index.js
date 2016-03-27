function route(prevState = { path: '' }, action) {
  switch (action.type) {
    case 'NAVIGATE':
      return Object.assign({}, prevState, { path: action.path });
    default:
      return prevState;
  }
}

function users(prevState = [
  'mary',
  'jo',
  'lisa'
], action) {
  return prevState;
}

function appReducer(state = {}, action) {
  return {
    route: route(state.route, action),
    users: users(state.route, action)
  }
}

export default appReducer;
