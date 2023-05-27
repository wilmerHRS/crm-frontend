export interface ICustomer {
  idCustomer?: number;
  nombre: string;
  direcciones: string;
  telefonos: string;
  contactos: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface QueryCustomer {
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  endDate?: string;
  search?: string;
}
