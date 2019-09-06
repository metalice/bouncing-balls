import { WIDTH, HEIGHT } from "../../utils/types";

export const CHANGE_MAX_WIDTH = data => ({
  type: WIDTH,
  data
});

export const CHANGE_MAX_HEIGHT = data => ({
  type: HEIGHT,
  data
});
