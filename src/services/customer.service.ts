import Api from "../config/Api";
import { ICustomer, QueryCustomer } from "../interfaces/customer.interface";
import { IGetAll } from "../interfaces/global.interface";

const create = async (body: ICustomer): Promise<ICustomer> => {
  return await Api.post("/Customer", body);
};

//? obtener CATEGORIAS
const getAll = async ({
  pageNumber = 1,
  pageSize = 8,
  startDate,
  endDate,
  search,
}: QueryCustomer): Promise<IGetAll<ICustomer>> => {
  const page = `pageNumber=${pageNumber}&pageSize=${pageSize}`;
  const date =
    startDate && endDate ? `startDate=${startDate}&endDate=${endDate}` : "";
  const searchParam = search ? `&search=${search}` : "";
  const res = await Api.get(`/Customer?${page}&${date}${searchParam}`);
  return res.data;
};

const getAllData = async (): Promise<ICustomer[]> => {
  const res = await Api.get(`/Customer/all`);
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
  getAllData,
  update,
  delete: _delete,
};

export { customerService };
