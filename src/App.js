import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Main from "./components/main";
import Leaderboard from "./components/leaderboard";
import React, { Component } from "react";
import Home from "./components/home";
import Rules from "./components/rules";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route
            path="/leaderboard"
            element={<Leaderboard authed={this.authenticated()} />}
          />
          <Route
            path="/question"
            element={<Main authed={this.authenticated()} />}
          />
        </Routes>
      </div>
    );
  }
  authenticated = () => {
    if (localStorage.getItem("access-token")) {
      return true;
    } else {
      return false;
    }
  };
}

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/leaderboard"
//           element={<Leaderboard />}
//           onEnter={requireAuth}
//         />
//         <Route path="/question" element={<Main />} onEnter={requireAuth} />
//       </Routes>
//     </div>
//   );
// }

export const BASE_URL = "http://35.87.200.114/api/";
export default App;
