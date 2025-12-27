import { Routes, Route, Link } from 'react-router-dom';
import BelajarVariable from './BelajarVariable';
import BelajarState from './BelajarState';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/variable" style={{ marginRight: '10px' }}>Versi Variable (Salah)</Link>
        |
        <Link to="/state" style={{ marginLeft: '10px' }}>Versi State (Benar)</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div style={{ padding: '20px' }}>
            <h2>Selamat Datang!</h2>
            <p>Silakan pilih menu di atas untuk melihat perbedaan Variable biasa vs State.</p>
          </div>
        } />
        <Route path="/variable" element={<BelajarVariable />} />
        <Route path="/state" element={<BelajarState />} />
      </Routes>
    </div>
  );
}

export default App;