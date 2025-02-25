import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ExchangesPage from './pages/ExchangesPage';
import TradingPage from './pages/TradingPage';
import SettingsPage from './pages/SettingsPage';
import IframePage from './pages/IframePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ExchangesPage />} />
          <Route path="/trading" element={<TradingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/iframe" element={<IframePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;