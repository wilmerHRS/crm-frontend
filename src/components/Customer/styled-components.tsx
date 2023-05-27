import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

export const FormErrorMessage = styled(ErrorMessage)`
  color: red;
  margin: 0;
`;

export const FErrorMessage = styled.p`
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

export const StyleBtnPag = styled.button<{ $active: boolean }>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.$active ? "#007bff" : "#f2f2f2")};
  color: ${(props) => (props.$active ? "#fff" : "#000000")};

  &:hover {
    color: #fff;
    background-color: #007bff;
  }
`;

export const StyleBtnAS = styled.button`
  border: none;
  background-color: #fff;
  border-radius: 18px;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const StyleContainerInput = styled.div`
  position: relative;

  & input {
    padding-right: 32px;
    padding-left: 20px;
  }

  & i {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: #999999;
  }
`;
