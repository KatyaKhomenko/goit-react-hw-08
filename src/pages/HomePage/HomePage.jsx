import React from 'react';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.homePage}>
      <h2 className={css.header}>
        Вітаємо у вашому персональному додатку для керування контактами!
      </h2>
      <p className={css.descr}>
        Цей додаток допоможе вам легко та зручно зберігати, редагувати та
        організовувати ваші контакти.
      </p>
      <span>Ви зможете:</span>
      <ul className={css.list}>
        <li>
          Швидко додавати нові контакти та зберігати важливу інформацію про них.
        </li>
        <li>
          Організовувати та шукати контакти за допомогою зручної пошукової
          системи.
        </li>
        <li>
          Захищати свої дані, оскільки доступ до контактів можливий лише після
          авторизації.
        </li>
      </ul>
      <p>
        Наш додаток забезпечує простий інтерфейс і високу функціональність, щоб
        ви завжди мали доступ до важливих контактів у будь-який час та в
        будь-якому місці.
      </p>
      {isLoggedIn ? null : (
        <p className={css.finalText}>
          Розпочніть роботу вже зараз –{' '}
          <Link to="/register">зареєструйтесь</Link> або{' '}
          <Link to="/login">увійдіть</Link> у свій обліковий запис, щоб отримати
          повний доступ до всіх можливостей!
        </p>
      )}
    </div>
  );
};

export default HomePage;