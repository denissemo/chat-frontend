import actions from "./actions";
import mutations from "./mutations";

export default {
  namespaced: true,
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
    username: null
  },
  actions,
  mutations
};
