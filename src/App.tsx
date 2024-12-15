import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "@/src/game/Game.page";
import NoticePage from "@/src/notice/Notice.page";
import "@/src/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GamePage />} />
        <Route path="/tnf" element={<GamePage />} />
        <Route path="/tnf/*" element={<GamePage />} />
        <Route path="/tnf/notice" element={<NoticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
