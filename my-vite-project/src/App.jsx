import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from "./Components/Navbar";
import Message from "./Components/Messages";
import './App.css';

// Optional Home component for the default route
const Home = () => (
  <div>
    
  </div>
);

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Message />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
