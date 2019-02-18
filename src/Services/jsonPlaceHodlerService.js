import axios from "./../Api/jsonPlaceHolder";

export const fetchResources = async selectedResource => {
  const response = await axios.get(`/${selectedResource}`);
  return response;
};
