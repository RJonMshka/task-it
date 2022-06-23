import React from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {
            ["/", "/home"].map((path, index) => 
            <Route path={path} key={index} element={<Home />} />)
          }
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
