import React from 'react';
import Button from '@material-ui/core/Button';
import Styles from './actionsLogin.module.scss';

type ActionsLoginProps = {
  isResetPasswordActive: boolean;
  isLoginActive: boolean;
};

export default function ActionsLogin({
  isResetPasswordActive = false,
  isLoginActive = false,
}: ActionsLoginProps) {
  return (
    <div className={Styles.container}>
      <Button
        className={`${
          isResetPasswordActive
            ? Styles.btnResetPasswordActive
            : Styles.btnResetPassword
        }`}
      >
        Esqueci minha senha
      </Button>
      <Button
        className={`${isLoginActive ? Styles.btnLoginActive : Styles.btnLogin}`}
      >
        Entrar
      </Button>
    </div>
  );
}
