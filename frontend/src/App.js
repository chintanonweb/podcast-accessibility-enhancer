import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TranscriptionDashboard from './components/TranscriptionDashboard';
import InsightsPage from './components/InsightsPage';
import SearchInterface from './components/SearchInterface';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/transcription" element={<TranscriptionDashboard />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/search" element={<SearchInterface />} />
      </Routes>
    </Router>
  );
}

export default App;