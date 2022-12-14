import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PokeCardDetail from "./components/PokeCardDetails";
import ErrorPage from "./components/ErrorPage";
import PokeFight from "./components/PokeFight";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="fullScreen">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="detail/:id" element={<PokeCardDetail />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/arena" element={<PokeFight />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
