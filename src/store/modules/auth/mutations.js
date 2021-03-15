export default {
  SET_USER: (state, user) => {
    state.user = user;
  },

  SET_USER_EMAIL: (state, email) => {
    state.userEmail = email;
  },

  SET_USERNAME: (state, username) => {
    state.username = username;
  },

  SET_RESET_TOKEN: (state, token) => {
    state.resetToken = token;
  },

  SET_TOKEN: (state, token) => {
    state.token = token;
    localStorage.setItem("token", token);
  },

  REMOVE_TOKEN: state => {
    state.token = null;
    localStorage.removeItem("token");
  },

  SET_TFA: (state, tfa) => {
    state.tfa = tfa;
  }
};
