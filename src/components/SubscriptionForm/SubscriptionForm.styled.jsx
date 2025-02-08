import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const WrapperSubscriptionForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubscriptionFormInput = styled(Field)`
  width: 160px;
  height: 30px;
  padding-left: 5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.bg};
  color: ${({ theme }) => theme.colors.primary.text};
  border: none;
`;
export const SubscriptionFormButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.bgDark};
  color: ${({ theme }) => theme.colors.primary.bg};
  border: none;
`;

export const SubscriptionFormError = styled(ErrorMessage)`
  position: absolute;
  top: -20px;
  left: 5px;

  font-size: 12px;
  color: red;
`;
