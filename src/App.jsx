import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PetDetailsPage from './pages/PetDetailsPage';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
