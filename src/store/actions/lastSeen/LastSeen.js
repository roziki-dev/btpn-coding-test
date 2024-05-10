import {TYPE} from '../../types';

export const updateSeen = (data = {}) => {
  return (dispatch, getState) => {
    let lastData = getState().lastSeen?.data || [];
    const index = lastData.findIndex(o => o.id === data?.id);
    if (index === -1) {
      lastData.unshift({id: data?.id});
      dispatch(update(lastData));
    } else {
      lastData.splice(index, 1);
      lastData.unshift({id: data?.id});
      dispatch(update(lastData));
    }
  };
};

const update = data => {
  return {
    type: TYPE.LAST_SEEN,
    payload: data,
  };
};

export const lastSeenClear = () => {
  return {
    type: TYPE.LAST_SEEN_CLEAR,
  };
};
