import http from "@/utils/http";
import router from "@/router";
// import App from "@/main";

export default {
  login: async ({ commit }, user) => {
    return await http({ url: "/auth/login", method: "POST", data: user })
      .then(res => {
        if (res.data) {
          commit("SET_USER", res.data.user);
          commit("SET_TOKEN", res.data.token);

          if (res.data.user) {
            router.push("/account");
          }

          return {
            code: res.status
          };
        }
      })
      .catch(err => {
        if (err.response) {
          const data = err.response.data;
          return {
            code: data && data.code,
            errorCode: data && data.message
            // message: data && App.$t(`errors.${data.message}`) || App.$t("errors.UnknownError")
          };
        }
      });
  },

  register: async ({ commit }, user) => {
    return await http({ url: "/auth/sign-up", method: "POST", data: user })
      .then(res => {
        if (res.data) {
          commit("SET_USER", res.data);

          router.push("/login");
        }
      })
      .catch(err => {
        if (err.response) {
          const data = err.response.data;
          return {
            code: data && data.code,
            errorCode: data && data.message
            // message:
            //   (data && App.$t(`errors.${data.message}`)) ||
            //   App.$t("errors.UnknownError")
          };
        }
      });
  },

  getUser: async ({ commit }) => {
    await http({
      url: "/users",
      method: "GET"
    })
      .then(res => {
        if (res.data) {
          commit("SET_USER", res.data);
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          commit("SET_USER", null);
          commit("REMOVE_TOKEN");
        }
      });
  },

  logout: ({ commit }) => {
    commit("REMOVE_TOKEN");
  }
};
