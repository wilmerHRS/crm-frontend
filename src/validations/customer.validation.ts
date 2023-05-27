import * as Yup from "yup";

export const CustomerFormSchema = Yup.object()
  .shape({
    nombre: Yup.string()
      .required("Campo Nombre requerido")
      .min(2, "2 caracteres como mínimo")
      .max(40, "40 caracteres como máximo"),
    direcciones: Yup.string()
      .required("Campo Dirección requerido")
      .min(2, "2 caracter como mínimo")
      .max(255, "255 caracteres como máximo"),
    telefonos: Yup.string()
      .matches(/^9\d{8}(\s*,\s*9\d{8})*$/, "Ingrese teléfono válido")
      .required("Campo Teléfono requerido")
      .min(9, "9 caracter como mínimo")
      .max(255, "255 caracteres como máximo"),
    contactos: Yup.string()
      .required("Campo Contacto requerido")
      .min(2, "2 caracter como mínimo")
      .max(255, "255 caracteres como máximo"),
  })
  .optional();
