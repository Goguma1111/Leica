import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import NewMember from './pages/NewMember';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-member" element={<NewMember />} />
      </Routes>
    </Router>
  );
}

export default App; 