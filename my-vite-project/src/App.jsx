// App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Message from "./Components/Messages";
import About from "./Components/About";
import ChatPage from "./Components/ChatPage";
import Features from "./Components/Features";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-page">
    <div className="home-content">
      <h1>ConnectFlow</h1>
      <p>Seamlessly chat with friends, powered by AI.</p>
      <Link to="/messages" className="cta-button">
        Get Started
      </Link>
+     <Link to="/features" className="cta-button secondary">
+       See Features
+     </Link>
    </div>
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
+         <Route path="/features" element={<Features />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat/:friend" element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
