import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

export const FormErrorMessage = styled(ErrorMessage)`
  color: red;
  margin: 0;
`;

export const InputText = styled(Field)`
  padding: 10px 10px;
  border: 0;
  background-color: rgba(185, 185, 185, 0.39);
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  border-radius: 5px;
  width: 100%;

  &::placeholder {
    font-weight: 500;
    color: rgba(80, 79, 79, 0.6);
  }
`;
