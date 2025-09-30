import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Header from './components/Header.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<Home />} />
          {/* Ruta para la política de privacidad */}
          <Route path="/privacidad" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;