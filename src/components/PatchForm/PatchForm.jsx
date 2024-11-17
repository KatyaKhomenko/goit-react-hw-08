import css from './PatchForm.module.css';

import { Toaster } from 'react-hot-toast';
import { useId } from 'react';
import * as Yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import { closeEditor } from '../../redux/contacts/slice';

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

export default function PatchForm({ id, name, number }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      editContact({ contactId: id, name: values.name, number: values.number })
    );
    actions.resetForm();
  };

  const handleIsCloseEdit = () => {
    dispatch(closeEditor());
  };

  return (
    <div className={css.modalEditor}>
      <button
        className={css.btnClose}
        type="button"
        onClick={handleIsCloseEdit}
      >
        <CloseIcon />
      </button>
      <Formik
        className={css.form}
        initialValues={{ name: name || '', number: number || '' }}
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
            Accept Edition
          </button>
        </Form>
      </Formik>
      <Toaster position="bottom-center" reverseOrder={true} />
    </div>
  );
}