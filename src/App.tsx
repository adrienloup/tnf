import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "@/src/game/Game.page";
import SetupPage from "@/src/setup/Setup.page";
import "@/src/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<GamePage />} />
        <Route path="/tnf" element={<GamePage />} />
        <Route path="/tnf/*" element={<GamePage />} />
        <Route path="/tnf/setup" element={<SetupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
