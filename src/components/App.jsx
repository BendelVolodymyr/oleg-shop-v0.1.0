import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const NotFound = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Catalog = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const Cart = lazy(() => import('../pages/СartPage/CartPage'));
const Favorite = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* На майбутню адмін панель */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="customers" element={<Customers />} />
        </Route> */}
      </Routes>
    </div>
  );
};
