// src/components/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <main className="privacy-section">
      <h1>Política de Privacidad del Agente Boby</h1>
      <p>Fecha de última actualización: Septiembre 2025</p>

      <h2>1. Recopilación de Información</h2>
      <p>El Agente Boby, operado por [Tu Nombre/Empresa], interactúa exclusivamente a través de la API de WhatsApp Cloud.</p>
      <ul>
        <li>**Mensajes de Usuario:** Almacenamos el historial de tus mensajes (texto, imágenes, audio) en nuestra base de datos (Firebase Firestore) para mantener el contexto de la conversación. Esta información se usa únicamente para mejorar la calidad y relevancia de las cotizaciones de Boby.</li>
        <li>**Datos del Contacto:** Solo almacenamos el número de teléfono del usuario (ID de remitente) para identificar y gestionar el historial de chat.</li>
        <li>**Datos Sensibles:** Boby no recopila, almacena ni comparte información personal identificable (nombre, dirección, datos bancarios).</li>
      </ul>

      <h2>2. Uso de la Información (Contexto)</h2>
      <p>El historial de conversación es enviado a la **API de Gemini (Vertex AI)** para que el agente pueda recordar cotizaciones previas, marcas y modelos de vehículos mencionados, asegurando una experiencia continua y coherente. El historial se mantiene por un máximo de 30 días.</p>

      <h2>3. Almacenamiento y Seguridad</h2>
      <p>Toda la información del chat se almacena de forma segura en **Firebase Firestore**, eligiendo la región de [Tu Región Elegida, e.g., Querétaro (`northamerica-south1`)] para cumplir con las regulaciones de la región.</p>

      <h2>4. Enlaces a Terceros (Cotizaciones)</h2>
      <p>Boby busca precios estimados en Internet. Estos enlaces de cotización pueden dirigir a sitios web de terceros que tienen sus propias políticas de privacidad. No somos responsables por las prácticas de esos sitios.</p>
      
      <p className="back-link">
         <Link to="/">← Volver a la página principal</Link>
      </p>
    </main>
  );
}

export default PrivacyPolicy;