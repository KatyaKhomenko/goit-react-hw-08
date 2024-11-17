import { Toaster } from 'react-hot-toast';
import css from './ContactForm.module.css';

import { useId } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

//Validation config
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

//State of initialValues
const contactValue = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        className={css.form}
        initialValues={contactValue}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.inputName} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            name="name"
            component="div"
            style={{ color: 'red', fontSize: '12px' }}
          />

          <label className={css.inputName} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={phoneFieldId}
          />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: 'red', fontSize: '12px' }}
          />
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
}