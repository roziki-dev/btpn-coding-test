import {client} from '../../helpers/api';

const Contact = () => {
  const get = async (id = null) => {
    let res;
    if (!id) {
      res = await client.get('contact');
    } else {
      res = await client.get(`contact/${id}`);
    }
    return res;
  };

  const post = async (body = {}) => {
    const res = await client.post('contact', body);
    return res;
  };

  const put = async (body = {}, id) => {
    const res = await client.put(`contact/${id}`, body);
    return res;
  };

  const deleteContact = async id => {
    const res = await client.delete(`contact/${id}`);
    return res;
  };

  return {get, post, put, deleteContact};
};

export const ContactService = Contact();
