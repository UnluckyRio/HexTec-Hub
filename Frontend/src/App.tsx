import "./css/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Champions from "./components/Champions";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Champions" element={<Champions />} />
      </Routes>
    </>
  );
}
export default App;
