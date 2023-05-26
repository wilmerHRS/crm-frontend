import React from "react";

export const Search = () => {
  return (
    <div className="d-flex gap-1">
      <input
        type="text"
        className="form-control py-2 rounded-5"
        id="busqueda"
        placeholder="Buscar por Nombre"
        name="busqueda"
      />
      <button type="button" className="btn btn-primary rounded-5">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};
