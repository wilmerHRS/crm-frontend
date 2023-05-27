import React from "react";
import { utils, writeFile } from "xlsx";
import { customerService } from "../../services/customer.service";
import { convertDate } from "../../helpers/convertDate";

export const BtnExcel = () => {
  const getData = async () => {
    const res = await customerService.getAllData();
    const data = res.map((c) => ({
      Nombres: c.nombre,
      Direcciones: c.direcciones,
      Teléfonos: c.telefonos,
      Contactos: c.contactos,
      "Fecha Registro": convertDate(c.createdAt || ""),
      "Fecha Actualización": convertDate(c.updatedAt || ""),
    }));
    return data;
  };

  const handleOnExport = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const wb = utils.book_new();
    // obtener clientes
    const data = await getData();
    const ws = utils.json_to_sheet(data);

    utils.book_append_sheet(wb, ws, "Clientes");
    writeFile(wb, "Clientes.xlsx");
  };

  return (
    <button
      type="button"
      className="btn btn-success px-4"
      onClick={handleOnExport}
    >
      <i className="bi bi-file-earmark-excel me-1"></i>
      Excel
    </button>
  );
};
