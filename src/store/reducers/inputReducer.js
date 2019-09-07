import { INPUT } from "../../utils/types";

export default (state = {}, { type, data }) => {
  switch (type) {
    case INPUT:
      return { ...state, inputValue: data };
    default:
      return state;
  }
};
