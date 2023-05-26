import React, { useEffect, useState } from "react";
import { Layout } from "../layouts";
import { Search, Table } from "../components/Customer";
import { ICustomer } from "../interfaces/customer.interface";
import { customerService } from "../services/customer.service";
import Swal from "sweetalert2";
import { Modal } from "../components/Modal";
import { Form } from "../components/Customer/Form";

const initialValues: ICustomer = {
  nombre: "",
  direcciones: "",
  telefonos: "",
  contactos: "",
};

const Customer = () => {
  const [customers, setCustomers] = useState<ICustomer[] | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState(initialValues);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // * Obtener CLIENTNES
  const getCustomers = async () => {
    const data = await customerService.getAll();
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
    const customer = customers?.find((c) => c.idCustomer === id);
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
            getCustomers();
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

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Layout title="Clientes">
      <div className="d-flex align-items-end justify-content-between">
        <div className="d-flex align-items-end gap-5">
          {/* agregar y excel */}
          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary px-4"
              onClick={handleOpenModal}
            >
              AGREGAR
            </button>
            <button type="button" className="btn btn-success px-4">
              Excel
            </button>
          </div>
          {/* fechas */}
          <div className="d-flex gap-2">
            <div>
              <label htmlFor="date-desde" className="form-label mb-1">
                Desde
              </label>
              <input type="date" className="form-control" id="date-desde" />
            </div>
            <div>
              <label htmlFor="date-hasta" className="form-label mb-1">
                Hasta
              </label>
              <input type="date" className="form-control" id="date-hasta" />
            </div>
          </div>
        </div>
        {/* buscar */}
        <Search />
      </div>
      {/* tabla */}
      <div className="pt-3">
        {customers && (
          <Table
            customers={customers}
            handleEdit={handleEditCustomer}
            handleDelete={handleDeleteCustomer}
          />
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
