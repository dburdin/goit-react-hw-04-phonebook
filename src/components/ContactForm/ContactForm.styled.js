import { Form as FormikForm, Field as FormikInput } from 'formik';

import styled from 'styled-components';

export const Form = styled(FormikForm)`
  width: 450px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 5px 5px;
  font-size: large;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Field = styled(FormikInput)`
  height: 30px;
  outline: none;
  border: 1px solid #7a7a7a;
  border-radius: 0;
  font-size: medium;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  :active,
  :focus {
    border: 1px solid #999999;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  cursor: pointer;

  padding: 3px 24px;
  border: 2px solid #cccccc;
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 400;
  color: #000000;
  background-color: #cccccc;
  text-align: center;

  :hover {
    border-color: #7a7a7a;
  }
  :active {
    background-color: #999999;
  }
`;
