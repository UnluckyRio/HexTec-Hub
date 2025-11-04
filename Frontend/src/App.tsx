import "./css/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from "./components/SideBar";
import Title from "./components/Title";
import AccountPic from "./components/AccountPic";
import Footer from "./components/Footer"; // Footer del sito

function App() {
  return (
    <>
      <div className="position-fixed top-0 end-0 p-3 z-3">
        <AccountPic />
      </div>
      <Title />
      <SideBar />
      {/* Footer sempre alla fine della pagina */}
      <Footer />
    </>
  );
}

export default App;
