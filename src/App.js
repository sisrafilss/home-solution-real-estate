import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PrivatRoute from "./pages/Login/PrivatRoute/PrivatRoute";

import Rent from "./pages/Rent/Rent";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import SaleFlats from "./pages/SaleFlats/SaleFlats";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder/PlaceOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/buy-flats" element={<SaleFlats />} />
      <Route
        path="/dashboard"
        element={
          <PrivatRoute>
            <Dashboard />
          </PrivatRoute>
        }
      />
      <Route
        path="/sale-flats/:id"
        element={
          <PrivatRoute>
            <PlaceOrder />
          </PrivatRoute>
        }
      />
      <Route
        path="/rent"
        element={
          <PrivatRoute>
            <Rent />
          </PrivatRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
