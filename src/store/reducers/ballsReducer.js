import { ADD_TO_BALLS, UPDATE_X, REMOVE } from "../../utils/types";

const initState = { balls: {}, mostRight: null, mostLeft: null };

export default (state = initState, { type, data: { id, x } = {} }) => {
  switch (type) {
    case ADD_TO_BALLS:
      return { ...state, balls: { ...state.balls, [id]: null } };
    case UPDATE_X:
      state.balls[id] = x;
      const sortedBalls = Object.values(state.balls).sort((a, b) => a - b);
      return {
        ...state,
        mostLeft: sortedBalls[0],
        mostRight: sortedBalls[sortedBalls.length - 1]
      };
    case REMOVE:
      delete state.balls[id];
      return state;
    default:
      return state;
  }
};
