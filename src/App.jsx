import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "../src/pages/Home/Home";
import Catalog from "../src/pages/Catalog/Catalog";
import Favorites from "../src/pages/Favorites/Favorites.jsx";

export default function App() {
  return (
    <>
      <Router basename="/car-rental-app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
