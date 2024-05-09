import {TYPE} from '../../types';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE.LAST_SEEN:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case TYPE.LAST_SEEN_CLEAR:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};
