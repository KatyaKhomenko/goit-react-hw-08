import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.logoutWrapper}>
      <span className={css.greet}>Hello, <span className={css.name}>{user.name}</span></span>
      <button className={css.logoutBtn} type="button" onClick={handleLogout}>
        <LogoutIcon />
      </button>
    </div>
  );
};

export default UserMenu;