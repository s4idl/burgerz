import React, { useEffect, useState } from 'react';
import './MenuModal.css';

const fullMenu = [
  { name: "La Clásica Perrísima", desc: "Doble carne, queso cheddar fundido, tocino crujiente y nuestra salsa secreta.", price: "$180", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Doble Infarto", desc: "Cuatro carnes, aros de cebolla, salsa BBQ y extra queso.", price: "$240", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Pollo Loco", desc: "Pollo frito crujiente estilo sureño con ensalada de col picante.", price: "$160", img: "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "La Trufada", desc: "Carne angus, queso suizo, champiñones salteados y mayonesa de trufa negra.", price: "$210", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Spicy Diablo", desc: "Doble carne, jalapeños asados, queso pepper jack y salsa habanera.", price: "$195", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Mac & Cheese Burger", desc: "Carne rellena de queso, cubierta con macarrones con queso cremosos y tocino.", price: "$220", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "La Veggie", desc: "Medallón de portobello asado, queso provolone, aguacate y pesto.", price: "$175", img: "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Smash Especial", desc: "Tres carnes aplastadas ultra crujientes con cebolla caramelizada.", price: "$190", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Hawaiiana Pro", desc: "Carne de cerdo desmenuzada, piña a la parrilla, queso gouda y salsa teriyaki.", price: "$185", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "La Mañanera", desc: "Carne, huevo estrellado, hash brown crujiente y mermelada de tocino.", price: "$205", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Gorgonzola Dream", desc: "Carne angus, queso azul derretido, cebolla frita y arúgula fresca.", price: "$215", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "Señor Ahumado", desc: "Brisket ahumado 12 horas, pepinillos dulces, mostaza rústica y aros de cebolla.", price: "$250", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
  { name: "La Monstruo", desc: "Cinco carnes, todos los quesos disponibles, tocino infinito y pan de ajo.", price: "$350", img: "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
];

const MenuModal = ({ isOpen, onClose }) => {
  const [render, setRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) setRender(false);
  };

  if (!render) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'open' : 'closed'}`} 
      onClick={onClose}
      onAnimationEnd={onAnimationEnd}
    >
      <div 
        className={`modal-content ${isOpen ? 'open' : 'closed'}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title">MENÚ COMPLETO</h2>
        
        <div className="modal-grid">
          {fullMenu.map((item, idx) => (
            <div className="menu-item-card" key={idx} style={{ '--delay': `${idx * 0.05}s` }}>
              <div className="menu-item-thumb-wrapper">
                <img src={item.img} alt={item.name} className="menu-item-thumb" />
              </div>
              <div className="menu-item-header">
                <div className="menu-item-title-row">
                  <h3>{item.name}</h3>
                </div>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
