import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Main from "./components/main";
// import Leaderboard from "./components/leaderboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<Main />} />
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
