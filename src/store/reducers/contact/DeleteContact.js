import {TYPE} from '../../types';

const INITIAL_STATE = {
  status: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE.CONTACT_DELETE:
      return {
        ...state,
        status: null,
        loading: true,
      };
    case TYPE.CONTACT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload?.status,
      };
    case TYPE.CONTACT_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload?.status,
      };
    case TYPE.CONTACT_DELETE_CLEAR:
      return {
        ...state,
        loading: false,
        status: null,
      };
    default:
      return state;
  }
};
