import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";

const Layout = lazy(() => import("components/Layout"));
const Home = lazy(() => import("pages/Home/Home"));
const Catalog = lazy(() => import("pages/Catalog/Catalog"));
const Favorites = lazy(() => import("pages/Favorites/Favorites"));

export default function App() {
  return (
    <>
      <Router basename="/car-rental-app">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
