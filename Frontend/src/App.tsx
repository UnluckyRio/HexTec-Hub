import "./styles/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Champions from "./components/Champions";
import ChampionDetail from "./components/ChampionDetail";
import Article from "./components/Article";
import ArticleDetail from "./components/ArticleDetail";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Champions" element={<Champions />} />
        <Route path="/Champions/:id" element={<ChampionDetail />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Article/:id" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}
export default App;
