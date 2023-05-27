import React from "react";
import { ICustomer, QueryCustomer } from "../../interfaces/customer.interface";
import { customerService } from "../../services/customer.service";
import Swal from "sweetalert2";
import { Formik, FormikHelpers, FormikProps, Form as FForm } from "formik";
import { FormErrorMessage, InputText } from "./styled-components";
import { CustomerFormSchema } from "../../validations/customer.validation";

export interface Props {
  type: string;
  data: ICustomer;
  handleCloseModal: () => void;
  getData: (data: QueryCustomer) => Promise<void>;
}

export const Form = ({ type, data, handleCloseModal, getData }: Props) => {
  const handleSubmit = async (
    values: ICustomer,
    helpers: FormikHelpers<ICustomer>
  ) => {
    const data = { ...values, telefonos: values.telefonos.toString() };

    if (type === "CREATE") {
      await customerService
        .create(data)
        .then((res) => {
          helpers.setSubmitting(false);
          handleCloseModal();
          getData({});
          Swal.fire({
            text: "Cliente registrado con éxito",
            icon: "success",
          });
        })
        .catch((err) => {
          helpers.setSubmitting(false);
          Swal.fire({
            text: "Ocurrio un error al enviar la información",
            icon: "error",
          });
        });
    } else if (type === "UPDATE") {
      const idCategory = data.idCustomer || "";
      if (!idCategory) return;

      await customerService
        .update(data, idCategory)
        .then((res) => {
          helpers.setSubmitting(false);
          handleCloseModal();
          getData({});
          Swal.fire({
            text: "Cliente actualizado con éxito",
            icon: "success",
          });
        })
        .catch((err) => {
          helpers.setSubmitting(false);
          Swal.fire({
            text: "Ocurrio un error al enviar la información",
            icon: "error",
          });
        });
    }
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={CustomerFormSchema}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({
        isSubmitting,
        values,
        errors,
        setFieldValue,
        handleChange,
      }: FormikProps<ICustomer>) => (
        <FForm>
          <div>
            <div className="mb-3">
              <InputText
                type="text"
                name="nombre"
                placeholder="Nombre y Apellido"
              />
              <FormErrorMessage name="nombre" component={"p"} />
            </div>
            <div className="mb-3">
              <InputText
                type="text"
                name="direcciones"
                placeholder="Dirección"
              />
              <FormErrorMessage name="direcciones" component={"p"} />
            </div>
            <div className="mb-3">
              <InputText
                type="number"
                name="telefonos"
                placeholder="Teléfono"
              />
              <FormErrorMessage name="telefonos" component={"p"} />
            </div>
            <div className="mb-3">
              <InputText type="text" name="contactos" placeholder="Contactos" />
              <FormErrorMessage name="contactos" component={"p"} />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
            >
              GUARDAR
            </button>
          </div>
        </FForm>
      )}
    </Formik>
  );
};
