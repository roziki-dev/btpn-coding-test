import {combineReducers} from 'redux';

import GetAllContact from './contact/GetAllContact';

export default combineReducers({
  getAllContact: GetAllContact,
});
