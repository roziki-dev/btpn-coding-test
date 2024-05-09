import {TYPE} from '../../types';

const INITIAL_STATE = {
  status: null,
  message: '',
  loading: true,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE.CONTACT_LIST:
      return {
        ...state,
        message: '',
        status: null,
        loading: true,
        data: [],
      };
    case TYPE.CONTACT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload?.status,
        message: action.payload?.message,
        data: action.payload?.data,
      };
    case TYPE.CONTACT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload?.status,
        message: action.payload?.message,
      };
    default:
      return state;
  }
};
