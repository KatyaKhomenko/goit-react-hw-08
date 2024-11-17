import css from './ContactList.module.css';

import CircularProgressWithLabel from '../../js/CircularProgress/CircularProgress';
import Contact from '../Contact/Contact';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading } from '../../redux/auth/selectors';
import { selectFilteredContacts } from '../../redux/filters/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactList() {
  const isLoading = useSelector(selectLoading);
  const сontacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.listWrapper}>
      {isLoading ? (
        <div className={css.progress}>
          <CircularProgressWithLabel />
        </div>
      ) : (
        <ul className={css.wrapper}>
          {Array.isArray(сontacts) && сontacts.length === 0 && (
            <div>There are no contacts in your phonebook yet!</div>
          )}
          {Array.isArray(сontacts) &&
            сontacts.length > 0 &&
            сontacts.map(contact => {
              return (
                <li key={contact.id} className={css.listItem}>
                  <Contact {...contact} />
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}