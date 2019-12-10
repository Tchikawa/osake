import Axios from 'axios';

export const getOsakeList = () => {
  return Axios({
    method: 'GET',
    url: 'https://guarded-ridge-31043.herokuapp.com/v1/brand',
  }).then((response) => {
    return response.status === 200 ? response.data : []
  })
}