import React from "react";
import { StyleContainerInput } from "./styled-components";
import { QueryCustomer } from "../../interfaces/customer.interface";

interface Props {
  query: QueryCustomer;
  handleQuery: (q: QueryCustomer) => void;
}

export const Search = ({ query, handleQuery }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = { ...query };
    if (e.target.value.length <= 0) {
      delete q.search;
    } else {
      q.search = e.target.value;
    }

    handleQuery(q);
  };

  return (
    <StyleContainerInput className="d-flex gap-1">
      <input
        type="text"
        className="form-control py-2 rounded-5"
        id="busqueda"
        placeholder="Buscar por Nombre"
        name="nombre"
        onChange={handleChange}
      />
      <i className="bi bi-search"></i>
    </StyleContainerInput>
  );
};
