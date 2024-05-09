import {ContactService} from '../../../services/contacts';
import {TYPE} from '../../types';

export const getListContact = () => {
  return dispatch => {
    dispatch(load());
    ContactService.get()
      .then(res => {
        let responseData = {};
        responseData.data = res.data?.data;
        responseData.status = res?.status;
        responseData.message = res.data?.message;
        dispatch(success(responseData));
      })

      .catch(err => {
        dispatch(fail(err));
      });
  };
};

const load = () => {
  return {
    type: TYPE.CONTACT_LIST,
  };
};

const success = payload => {
  return {
    type: TYPE.CONTACT_LIST_SUCCESS,
    payload: payload,
  };
};

const fail = payload => {
  return {
    type: TYPE.CONTACT_LIST_FAIL,
    payload: payload,
  };
};
