import axios from 'axios';

export const getAccessTokenFromStorage = () =>
  new Promise(async (resolve, reject) => {
    try {
      const value = localStorage.getItem('userToken');
      resolve(value);
    } catch (error) {
      console.warn(error);
    }
  });
export const setHeaders = async (headers = null) => {
  let headerData;
  return getAccessTokenFromStorage().then((token) => {



    headerData = {
      
      "Content-type": "application/json",
      
      Accept: 'application/json',
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
     
    };

    if (headers) {
      headerData = { ...headerData, ...headers };
    }

    return headerData;
  });
};

const createAxios = async () => {
  let header = await setHeaders();
  return axios.create({
    baseURL: 'https://legalmo-server.onrender.com',
    headers: header,
  });
};

export default createAxios;