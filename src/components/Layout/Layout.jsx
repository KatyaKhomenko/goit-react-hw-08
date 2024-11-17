import React from 'react';
import AppBar from '../AppBar/AppBar';
import Header from '../Header/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
};