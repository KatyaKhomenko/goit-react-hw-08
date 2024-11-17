import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.authNav}>
      <NavLink to="/register" className={buildLinkClass}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Sign in
      </NavLink>
    </nav>
  );
};

export default AuthNav;