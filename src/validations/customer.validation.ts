import * as Yup from "yup";

export const CustomerFormSchema = Yup.object()
  .shape({
    nombre: Yup.string()
      .required("Campo Nombre requerido")
      .min(2, "2 caracteres como mínimo")
      .max(40, "100 caracteres como máximo"),
    direcciones: Yup.string()
      .required("Campo Dirección requerido")
      .min(2, "2 caracter como mínimo")
      .max(40, "100 caracteres como máximo"),
    telefonos: Yup.string()
      .matches(/^9\d{8}$/, "Ingrese un teléfono válido")
      .required("Campo Teléfono requerido"),
    contactos: Yup.string()
      .required("Campo Contacto requerido")
      .min(2, "2 caracter como mínimo")
      .max(40, "100 caracteres como máximo"),
  })
  .optional();
