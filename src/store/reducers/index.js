import {combineReducers} from 'redux';

import GetAllContact from './contact/GetAllContact';
import ContactDetail from './contact/ContactDetail';
import DeleteContact from './contact/DeleteContact';
import LastSeen from './lastSeen/LastSeen';

export default combineReducers({
  getAllContact: GetAllContact,
  contactDetail: ContactDetail,
  lastSeen: LastSeen,
  deleteContact: DeleteContact,
});
