import { Link } from 'react-router-dom';

import bobyImage from '../assets/boby.png'; 

function Home() {
  // URL de la imagen que generé (solo para referencia, usa la local):
  // http://googleusercontent.com/image_generation_content/0...
  
  return (
    <main className="home-section">
      <section className="hero">
        <img src={bobyImage} alt="Agente IA Boby" className="boby-logo" />
        <h1>Boby: Tu Asistente de Cotización de Piezas de Vehículos 🚗</h1>
        <p className="subtitle">
          Boby es un agente de IA especializado en identificar y cotizar piezas de autos al instante,
          usando inteligencia artificial avanzada y visión por computadora.
        </p>
      </section>

      <section className="features">
        <h2>¿Qué puede hacer Boby?</h2>
        <ul>
          <li>📸 **Identificación por Imagen:** Envía una foto de la pieza (e.g., un caliper) y Boby la identifica y busca precios.</li>
          <li>🔧 **Cotización de Mantenimiento:** Pregunta por el mantenimiento de tu vehículo (marca, modelo, año) y Boby genera una lista de piezas y un costo estimado.</li>
          <li>🎙️ **Consulta por Voz:** Envía audios con solicitudes de piezas y Boby te responde con las mejores opciones y cotizaciones.</li>
        </ul>
      </section>
      
      <section className="contact">
        <h2>¡Empieza a usar a Boby!</h2>
        <a 
          href="https://wa.me/TU_NUMERO_DE_WHATSAPP_EMPRESA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-btn"
        >
          Chatea con Boby en WhatsApp
        </a>
        <p>Boby está enlazado a la **API de Gemini** para darte las respuestas más inteligentes y actualizadas.</p>
      </section>
      
      <footer>
         <p>&copy; {new Date().getFullYear()} Boby AI. <Link to="/privacidad">Política de Privacidad</Link></p>
      </footer>
    </main>
  );
}

export default Home;