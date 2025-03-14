import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Message from "./Components/Messages";
import About from "./Components/About";
import "./App.css";

// Optional Home component for the default route
const Home = () => (
  <div>
    <h1>Welcome to ConnectFlow</h1>
    <p>Your AI-powered messaging platform.</p>
  </div>
);

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/about" element={<About />} /> {/* Added About route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
