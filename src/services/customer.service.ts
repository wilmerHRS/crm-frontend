import Api from "../config/Api";
import { ICustomer } from "../interfaces/customer.interface";

const create = async (body: ICustomer): Promise<ICustomer> => {
  return await Api.post("/Customer", body);
};

//? obtener CATEGORIAS
const getAll = async (page = 1): Promise<ICustomer[]> => {
  // const res = await Api.get(`/Customer?limit=${8}&page=${page}`);
  const res = await Api.get(`/Customer`);
  return res.data;
};

//? actualizar CATEGORIA
const update = async (body: ICustomer, id: number): Promise<ICustomer> => {
  return await Api.put(`/Customer/${id}`, body);
};

//? eliminar CATEGORIA
const _delete = async (id: number): Promise<ICustomer> => {
  return await Api.delete(`/Customer/${id}`);
};

const customerService = {
  create,
  getAll,
  update,
  delete: _delete,
};

export { customerService };
