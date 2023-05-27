import React, { useEffect, useState } from "react";
import { Layout } from "../layouts";
import {
  BtnExcel,
  DateRange,
  Pagination,
  Search,
  Table,
} from "../components/Customer";
import { ICustomer, QueryCustomer } from "../interfaces/customer.interface";
import { customerService } from "../services/customer.service";
import Swal from "sweetalert2";
import { Modal } from "../components/Modal";
import { Form } from "../components/Customer/Form";
import { IGetAll } from "../interfaces/global.interface";

const initialValues: ICustomer = {
  nombre: "",
  direcciones: "",
  telefonos: "",
  contactos: "",
};

const Customer = () => {
  const [customers, setCustomers] = useState<IGetAll<ICustomer> | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState(initialValues);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [query, setQuery] = useState<QueryCustomer>({});

  // * Obtener CLIENTNES
  const getCustomers = async (q: QueryCustomer) => {
    console.log("porq");

    const data = await customerService.getAll({ ...q, ...query });
    setCustomers(data);
  };

  // * Cerrar Modal
  const handleCloseModal = () => {
    setIsOpenModal(false);
    if (selectedCustomer.idCustomer) setSelectedCustomer(initialValues);
  };

  // * Abrir Modal
  const handleOpenModal = (): void => {
    setIsOpenModal(true);
  };

  const handleEditCustomer = (id: number): void => {
    const customer = customers?.data.find((c) => c.idCustomer === id);
    setSelectedCustomer(customer || initialValues);
    console.log(customer);

    handleOpenModal();
  };

  const handleDeleteCustomer = async (id: number): Promise<void> => {
    console.log(id);

    Swal.fire({
      title: "¿Esta seguro de eliminar el registro?",
      text: "Este tipo de cambios no son reversibles",
      icon: "question",
      cancelButtonColor: "#FF5151",
      showCancelButton: true,
      confirmButtonColor: "#007BFF",
      confirmButtonText: "Si, elimínalo",
      cancelButtonText: "Cancelar",
      iconColor: "#ffc15d",
    }).then((result) => {
      if (result.isConfirmed) {
        customerService
          .delete(id)
          .then((res) => {
            Swal.fire(
              "Eliminado!",
              "El Cliente fue eliminado con éxito",
              "success"
            );
            getCustomers({});
          })
          .catch((err) => {
            Swal.fire({
              text: err.message,
              icon: "error",
            });
          });
      }
    });
  };

  const handleQuery = (q: QueryCustomer) => {
    setQuery(q);
  };

  useEffect(() => {
    getCustomers({});
  }, []);

  useEffect(() => {
    console.log(query);

    getCustomers(query);
  }, [query]);

  return (
    <Layout title="Clientes">
      <div className="d-flex align-items-end justify-content-between">
        <div className="d-flex align-items-end gap-4">
          {/* agregar y excel */}
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary px-4"
              onClick={handleOpenModal}
            >
              AGREGAR
            </button>
            <BtnExcel />
          </div>
          {/* fechas */}
          <DateRange query={query} handleQuery={handleQuery} />
        </div>
        {/* buscar */}
        <Search query={query} handleQuery={handleQuery} />
      </div>
      {/* tabla */}
      <div className="pt-3">
        {customers?.data && (
          <>
            <Table
              customers={customers.data}
              handleEdit={handleEditCustomer}
              handleDelete={handleDeleteCustomer}
            />
            <Pagination
              data={{
                pageNumber: customers.pageNumber,
                totalPages: customers.totalPages,
                nextPage: customers.nextPage || 0,
                previousPage: customers.previousPage || 0,
              }}
              getData={getCustomers}
            />
          </>
        )}
      </div>
      <Modal
        title="Cliente"
        type={selectedCustomer.idCustomer ? "UPDATE" : "CREATE"}
        isOpen={isOpenModal}
        handleCloseModal={handleCloseModal}
      >
        <Form
          type={selectedCustomer.idCustomer ? "UPDATE" : "CREATE"}
          data={selectedCustomer}
          handleCloseModal={handleCloseModal}
          getData={getCustomers}
        />
      </Modal>
    </Layout>
  );
};

export default Customer;
