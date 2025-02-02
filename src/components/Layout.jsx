import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/catalog">Catalog</Link>
        <Link to="/">Oleg/Shop</Link>
        <Link to="/favorite">Favorite</Link>
        <Link to="/cart">Cart</Link>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
