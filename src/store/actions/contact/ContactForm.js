import {ContactService} from '../../../services/contacts';
import {TYPE} from '../../types';
import {getContactDetail} from './ContactDetail';

export const postContactForm = ({photo, firstName, lastName, age}) => {
  return dispatch => {
    dispatch(load());
    let data = {};
    data.photo = photo;
    data.firstName = firstName;
    data.lastName = lastName;
    data.age = age;

    ContactService.post(data)
      .then(res => {
        let responseData = {};
        responseData.data = res.data?.data;
        responseData.status = res?.status;
        responseData.message = 'ok';
        dispatch(success(responseData));
        dispatch(getContactDetail());
      })
      .catch(err => {
        console.log('err: ', err);
        dispatch(fail({...err, status: 400, message: 'Something wrong!'}));
      });
  };
};

export const putContactForm = ({id, photo, firstName, lastName, age}) => {
  return dispatch => {
    dispatch(load());
    let data = {};
    data.photo = photo;
    data.firstName = firstName;
    data.lastName = lastName;
    data.age = age;

    ContactService.put(data, id)
      .then(res => {
        let responseData = {};
        responseData.data = res.data?.data;
        responseData.status = res?.status;
        responseData.message = 'ok';
        dispatch(success(responseData));
        dispatch(getContactDetail());
      })
      .catch(err => {
        dispatch(fail({...err, status: 400, message: 'Something wrong!'}));
      });
  };
};

const load = () => {
  return {
    type: TYPE.CONTACT_FORM,
  };
};

const success = payload => {
  return {
    type: TYPE.CONTACT_FORM_SUCCESS,
    payload: payload,
  };
};

const fail = payload => {
  return {
    type: TYPE.CONTACT_FORM_FAIL,
    payload: payload,
  };
};

export const contactFormClear = () => {
  return {
    type: TYPE.CONTACT_FORM_CLEAR,
  };
};
