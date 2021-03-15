import store from "@/store";

export async function isAuth(to, from, next) {
  await store.dispatch("auth/getUser");

  if (!store.getters.loggedIn) {
    return next("/auth/login");
  }

  next();
}

export async function isNotAuth(to, from, next) {
  await store.dispatch("auth/getUser");

  if (store.getters.loggedIn) {
    return next("/account");
  }

  next();
}
