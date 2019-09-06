import { WIDTH, HEIGHT } from "../../utils/types";

export default (state = {}, { type, data }) => {
  switch (type) {
    case WIDTH:
      return { ...state, maxWidth: data };
    case HEIGHT:
      return { ...state, maxHeight: data };
    default:
      return state;
  }
};

