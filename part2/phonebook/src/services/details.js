import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

const create = (object) => {
  const request = axios.post(url, object);
  return request.then((response) => response.data);
};

const deleteItem = (id) => {
  const request = axios.delete(`${url}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, deleteItem};
