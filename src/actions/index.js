import { GET_OSAKE_LIST, GET_OSAKE_DETAIL } from '../utils/actionTypes';

export const getOsakeList = () => ({
  type: GET_OSAKE_LIST,
});


export const getOsakeDetail = (osake) => ({
    type: GET_OSAKE_DETAIL, osake
})

