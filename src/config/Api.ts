import axios from "axios";

const Api = axios.create({
  baseURL: "https://www.crm-cliente.somee.com/api",
});

export default Api;
