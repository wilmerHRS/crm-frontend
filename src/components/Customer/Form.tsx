import React from "react";
import { ICustomer, QueryCustomer } from "../../interfaces/customer.interface";
import { customerService } from "../../services/customer.service";
import Swal from "sweetalert2";
import { Formik, FormikHelpers, FormikProps, Form as FForm } from "formik";
import {
  FErrorMessage,
  FormErrorMessage,
  InputText,
} from "./styled-components";
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
        handleBlur,
        touched,
      }: FormikProps<ICustomer>) => (
        <FForm>
          <div className="overflow-auto" style={{ maxHeight: "70vh" }}>
            <div className="mb-2">
              <label className="mb-1" htmlFor="nombre">
                Nombres
              </label>
              <InputText
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre y Apellido"
              />
              <FormErrorMessage name="nombre" component={"p"} />
            </div>
            <div className="mb-2">
              <label className="mb-1" htmlFor="direcciones">
                Dirección(es)
              </label>
              <InputText
                as="textarea"
                rows={2}
                id="direcciones"
                name="direcciones"
                placeholder="ddddd, dddd, ddddd"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.direcciones}
              />
              <FormErrorMessage name="direcciones" component={"p"} />
            </div>
            <div className="mb-2">
              <label className="mb-1" htmlFor="telefonos">
                Teléfono(s)
              </label>
              <InputText
                as="textarea"
                rows={2}
                id="telefonos"
                name="telefonos"
                placeholder="xxx-xxx-xxx, xxx-xxx-xxx"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefonos}
              />
              <FormErrorMessage name="telefonos" component={"p"} />
            </div>
            <div className="mb-2">
              <label className="mb-1" htmlFor="contactos">
                Contacto(s)
              </label>
              <InputText
                as="textarea"
                rows={2}
                id="contactos"
                name="contactos"
                placeholder="ccccc, cccc, ccccc"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactos}
              />
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
