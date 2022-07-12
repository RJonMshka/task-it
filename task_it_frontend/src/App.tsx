import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import ProtectedRoute from './core/components/ProtectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

export const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>    
        <Router>
          <Routes>
            {
              ["/", "/home"].map((path, index) => 
              <Route path={path} key={index} element={<Home />} />)
            }
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<ProtectedRoute redirectPath='/login'>
              <Dashboard />
            </ProtectedRoute>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
