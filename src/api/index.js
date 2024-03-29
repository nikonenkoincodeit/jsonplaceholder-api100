import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

axios.defaults.baseURL = BASE_URL;

export function getData(data) {
  return axios.get(data).then((response) => response.data);
}
