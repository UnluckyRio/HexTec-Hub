import "./css/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return <>
      <Navbar />
      <Home />
      <Footer />
    </>;
}
export default App;