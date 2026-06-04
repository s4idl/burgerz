import React, { useState } from 'react';
import MenuModal from './MenuModal';
import './MenuTeaser.css';

const MenuTeaser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const burgers = [
    {
      name: "La Clásica Perrísima",
      desc: "Doble carne, queso cheddar fundido, tocino crujiente y nuestra salsa secreta.",
      price: "$180",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Doble Infarto",
      desc: "Cuatro carnes, aros de cebolla, salsa BBQ y extra queso.",
      price: "$240",
      img: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pollo Loco",
      desc: "Pollo frito crujiente estilo sureño con ensalada de col picante.",
      price: "$160",
      img: "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="menu-teaser" id="menu">
      <div className="menu-header">
        <h2>Nuestro Top 3</h2>
        <p className="subtitle">Las favoritas de la casa, directas para chuparse los dedos.</p>
      </div>

      <div className="burger-grid">
        {burgers.map((burger, idx) => (
          <div className="burger-card" key={idx}>
            <div className="burger-img-wrapper">
              <img src={burger.img} alt={burger.name} />
              <div className="price-tag">{burger.price}</div>
            </div>
            <div className="burger-info">
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="menu-action-container">
        <button className="view-full-menu-btn" onClick={() => setIsModalOpen(true)}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            Ver menú completo 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 14h20"></path>
              <path d="M22 14c0-2.8-2.2-5-5-5H7c-2.8 0-5 2.2-5 5"></path>
              <path d="M4.5 14l1.5 5h12l1.5-5"></path>
              <path d="M12 6V3"></path>
              <path d="M8 6V4"></path>
              <path d="M16 6V4"></path>
            </svg>
          </span>
        </button>
      </div>

      <MenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default MenuTeaser;
