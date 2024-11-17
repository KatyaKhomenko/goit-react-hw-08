import css from './LoginPage.module.css';
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <dialog open className={css.modal}>
      <h2>Login</h2>
      <LoginForm />
    </dialog>
  );
};

export default LoginPage;