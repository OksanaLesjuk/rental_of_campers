// import { Route, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage.jsx';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
import FavoritePage from '../pages/FavoritePage/FavoritePage.jsx';
import { Layout } from './Layout/Layout.jsx';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
};
