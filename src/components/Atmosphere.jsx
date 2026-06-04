import React from 'react';
import './Atmosphere.css';

const Atmosphere = () => {
  return (
    <section className="atmosphere-section">
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          <span>BUENA VIBRA • BUENA MÚSICA • FORANEO BURGERS • </span>
          <span>BUENA VIBRA • BUENA MÚSICA • FORANEO BURGERS • </span>
          <span>BUENA VIBRA • BUENA MÚSICA • FORANEO BURGERS • </span>
        </div>
      </div>
      
      <div className="atmosphere-content">
        <div className="atmosphere-text">
          <h2>El Spot Perfecto</h2>
          <p>
            No somos solo un restaurante de hamburguesas. Somos el lugar donde 
            te reúnes con tus amigos antes de la fiesta, donde el neón ilumina 
            tus noches y donde cada mordida se siente como la gloria. 
            Ambiente relajado, música a tope y sabor perrísimo.
          </p>
        </div>
        <div className="atmosphere-image">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Ambiente Foraneo Burgers" 
          />
          <div className="glass-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
