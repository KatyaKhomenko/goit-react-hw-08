import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <nav className={css.mainNav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        {isLogin ? (
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        ) : null}
      </nav>
    </>
  );
};

export default Navigation;