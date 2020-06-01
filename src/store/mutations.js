export function SET_POSTS(state, { posts }) {
  state.posts = posts;
}

export function LOGGING_IN(state, status) {
  state.logging_in = status;
}

export function LOGIN_SUCCESSFUL(state, { userObj }) {
  state.userObj = userObj;
  state.logging_in = false;
}
