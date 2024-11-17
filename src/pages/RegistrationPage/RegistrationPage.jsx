import css from './RegistrationPage.module.css';
import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <dialog open className={css.modal}>
      <h2>Sign up</h2>
      <RegistrationForm />
    </dialog>
  );
};

export default RegistrationPage;