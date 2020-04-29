export const increment = state => {
  state.dispatch({ type: "INCREMENT" });
};
export const decrement = state => {
  state.dispatch({ type: "DECREMENT" });
};
export const lock = state => {
  state.dispatch({ type: "LOCK" });
};
