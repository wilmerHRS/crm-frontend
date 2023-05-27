import axios from "axios";

const Api = axios.create({
  baseURL: "http://www.crm-cliente.somee.com/api",
});

export default Api;
