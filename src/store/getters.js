export default {
  loggedIn: state => !!state.auth.token,
  token: state => state.auth.token
};
