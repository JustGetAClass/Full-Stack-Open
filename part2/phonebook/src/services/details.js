import axios from "axios";

const url = "/api/persons";

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

const update = (id, object) => {
  const request = axios.put(`${url}/${id}`, object);
  return request.then((response) => response.data);
};

export default { getAll, create, deleteItem, update };
