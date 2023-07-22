import React from 'react';
import ForgotPasswordForm from '../../components/Forms/ForgotPasswordForm';
import { ChangePasswordProvider } from '../../context/ForgotPasswordContext';
const ChangePassword = () => {
  return (
    <ChangePasswordProvider>
      <ForgotPasswordForm />
    </ChangePasswordProvider>
  );
};

export default ChangePassword;
