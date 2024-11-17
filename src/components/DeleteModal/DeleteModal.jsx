import { Toaster } from 'react-hot-toast';
import React from 'react';
import css from './DeleteModal.module.css';
import { useDispatch } from 'react-redux';
import { acceptAction, closeModal } from '../../redux/contacts/slice';
import { deleteContact } from '../../redux/contacts/operations';

const DeleteModal = ({ id }) => {
  const dispatch = useDispatch();
  const handleIsAccept = () => {
    dispatch(acceptAction());
    dispatch(deleteContact(id));
  };
  const handleIsCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <dialog open className={css.modalDelete}>
        <p>Are you sure you want to delete this contact?</p>
        <div className={css.actions}>
          <button className={css.btn} onClick={handleIsAccept}>
            Yes
          </button>
          <button className={css.btn} onClick={handleIsCloseModal}>
            No
          </button>
        </div>
      </dialog>
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};

export default DeleteModal;