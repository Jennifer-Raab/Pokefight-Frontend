import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PokeCardDetail from "./components/PokeCardDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail/:id" element={<PokeCardDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
