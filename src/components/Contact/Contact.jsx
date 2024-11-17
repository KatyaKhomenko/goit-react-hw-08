import css from './Contact.module.css';
import { ImUser } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import PatchForm from '../PatchForm/PatchForm';
import DeleteModal from '../DeleteModal/DeleteModal';

import { openEditor, openModal } from '../../redux/contacts/slice';
import {
  selectEditorContactId,
  selectIsOpen,
  selectModalContactId,
  selectOpenEditor,
} from '../../redux/contacts/selectors';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const isOpenEditor = useSelector(selectOpenEditor);
  const modalContactId = useSelector(selectModalContactId);
  const editorContactId = useSelector(selectEditorContactId);

  const handleIsOpenModal = () => {
    dispatch(openModal(id));
  };

  const handleIsOpenEditor = () => {
    dispatch(openEditor(id));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.contactInfo}>
        <div className={css.wrapperInfo}>
          <ImUser />
          <p className={css.nameInfo}>{name}</p>
        </div>
        <div className={css.wrapperInfo}>
          <BsFillTelephoneFill />
          <p className={css.phoneInfo}>{number}</p>
        </div>
      </div>
      <div>
        <button className={css.btn} type="button" onClick={handleIsOpenEditor}>
          <EditIcon />
        </button>
        <button className={css.btn} type="button" onClick={handleIsOpenModal}>
          <DeleteForeverIcon />
        </button>
      </div>
      {isOpenEditor && editorContactId === id ? (
        <PatchForm id={id} name={name} number={number} />
      ) : null}
      {isOpen && modalContactId === id ? <DeleteModal id={id} /> : null}
    </div>
  );
}