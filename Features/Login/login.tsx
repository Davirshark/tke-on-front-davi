import React from 'react';
import ModalLogin from '../../Components/ModalLogin';
import Styles from './login.module.scss';

export default function Login() {
  return (
    <div className={Styles.container}>
      <ModalLogin />
    </div>
  );
}
