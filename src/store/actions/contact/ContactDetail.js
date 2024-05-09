import {ContactService} from '../../../services/contacts';
import {TYPE} from '../../types';
import {updateSeen} from '../lastSeen/LastSeen';

export const getContactDetail = id => {
  return dispatch => {
    dispatch(load());
    ContactService.get(id)
      .then(res => {
        let responseData = {};
        responseData.data = res.data?.data;
        responseData.status = res.data?.status;
        responseData.message = res.data?.message;
        dispatch(success(responseData));
        dispatch(updateSeen(responseData.data));
      })

      .catch(err => {
        dispatch(fail(err));
      });
  };
};

const load = () => {
  return {
    type: TYPE.CONTACT_DETAIL,
  };
};

const success = payload => {
  return {
    type: TYPE.CONTACT_DETAIL_SUCCESS,
    payload: payload,
  };
};

const fail = payload => {
  return {
    type: TYPE.CONTACT_DETAIL_FAIL,
    payload: payload,
  };
};

export const contactDetailClear = () => {
  return dispatch => {
    dispatch(load());
  };
};
