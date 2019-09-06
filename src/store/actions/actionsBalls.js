import { ADD_TO_BALLS, UPDATE_X, REMOVE } from "../../utils/types";

export const CHANGE_ADD_TO_BALLS = data => {
  return {
    type: ADD_TO_BALLS,
    data
  };
};
export const CHANGE_UPDATE_X = data => ({
  type: UPDATE_X,
  data
});

export const REMOVE_BALL = data => ({
  type: REMOVE,
  data
});
