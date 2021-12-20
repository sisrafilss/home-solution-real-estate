import "./App.css";
import Home from "./pages/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
