import { Routes, Route, Link } from 'react-router-dom';
import BelajarVariable from './BelajarVariable';
import BelajarState from './BelajarState';
import BelajarEffect from './BelajarEffect';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/variable" style={{ marginRight: '10px' }}>Variable</Link>
        |
        <Link to="/state" style={{ margin: '0 10px' }}>State</Link>
        |
        <Link to="/effect" style={{ marginLeft: '10px' }}>Effect (Satpam)</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div style={{ padding: '20px' }}>
            <h2>Selamat Datang!</h2>
            <p>Silakan pilih menu di atas untuk belajar konsep React.</p>
          </div>
        } />
        <Route path="/variable" element={<BelajarVariable />} />
        <Route path="/state" element={<BelajarState />} />
        <Route path="/effect" element={<BelajarEffect />} />
      </Routes>
    </div>
  );
}

export default App;