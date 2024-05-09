import {ToastAndroid} from 'react-native';
import {ContactService} from '../../../services/contacts';
import {TYPE} from '../../types';

export const deleteContact = id => {
  return dispatch => {
    dispatch(load());
    console.log('delete id: ', id);
    ContactService.deleteContact(id)
      .then(res => {
        let responseData = {};
        responseData.data = res.data?.data;
        responseData.status = res?.status || 200;
        dispatch(success(responseData));
        ToastAndroid.show('Success.', ToastAndroid.SHORT);
      })

      .catch(err => {
        ToastAndroid.show('Sorry, Something wrong!', ToastAndroid.SHORT);
        dispatch(fail({...err, status: 400}));
      });
  };
};

const load = () => {
  return {
    type: TYPE.CONTACT_DELETE,
  };
};

const success = payload => {
  return {
    type: TYPE.CONTACT_DELETE_SUCCESS,
    payload: payload,
  };
};

const fail = payload => {
  return {
    type: TYPE.CONTACT_DELETE_FAIL,
    payload: payload,
  };
};
