import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section" id="info">
      <div className="info-container">
        <div className="info-header">
          <h2>Mucho más que una hamburguesa</h2>
          <div className="underline"></div>
        </div>
        
        <div className="info-grid">
          <div className="info-card">
            <div className="icon">🍔</div>
            <h3>Calidad Premium</h3>
            <p>Usamos ingredientes 100% frescos, pan artesanal horneado a diario y carne de la más alta calidad para una experiencia inolvidable.</p>
          </div>
          
          <div className="info-card">
            <div className="icon">📍</div>
            <h3>Ubicación</h3>
            <p>Av. Principal 123, Zona Centro.<br/>Ven a visitarnos y disfruta del mejor ambiente "perrísimo".</p>
          </div>
          
          <div className="info-card">
            <div className="icon">🕒</div>
            <h3>Horarios</h3>
            <p>Martes a Domingo<br/>1:00 PM - 11:00 PM<br/>Lunes Cerrado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
