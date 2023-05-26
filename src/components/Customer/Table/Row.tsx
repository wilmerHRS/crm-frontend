import React from "react";
import { ICustomer } from "../../../interfaces/customer.interface";
import { convertDate } from "../../../helpers/convertDate";

interface Props {
  customer: ICustomer;
  edit: () => void;
  _delete: () => Promise<void>;
}

export const Row = ({ customer, edit, _delete }: Props) => {
  return (
    <tr>
      <td>{customer.nombre}</td>
      <td>{customer.direcciones}</td>
      <td>{customer.telefonos}</td>
      <td>{customer.contactos}</td>
      <td>{convertDate(customer.createdAt!)}</td>
      <td>{convertDate(customer.createdAt!)}</td>
      <td>
        <button type="button" className="btn btn-primary me-2" onClick={edit}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <button type="button" className="btn btn-danger" onClick={_delete}>
          <i className="bi bi-trash3-fill"></i>
        </button>
      </td>
    </tr>
  );
};
