import {TYPE} from '../../types';

const INITIAL_STATE = {
  status: null,
  message: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE.CONTACT_FORM:
      return {
        ...state,
        status: null,
        loading: true,
        message: '',
      };
    case TYPE.CONTACT_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload?.status,
        message: action.payload?.message,
      };
    case TYPE.CONTACT_FORM_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload?.status,
        message: action.payload?.message,
      };
    case TYPE.CONTACT_FORM_CLEAR:
      return {
        ...state,
        loading: false,
        status: null,
        message: '',
      };
    default:
      return state;
  }
};
