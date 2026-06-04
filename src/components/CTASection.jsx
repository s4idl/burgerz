import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section" id="order">
      <div className="cta-container">
        <div className="cta-grid">
          
          <div className="cta-info">
            <h2 className="cta-title">¿HAMBRE? <span className="text-highlight">ORDENA YA</span></h2>
            <p className="cta-desc">
              No dejes para mañana la hamburguesa que te puedes devorar hoy. Pasa a recogerla al local o te la mandamos calientita hasta la puerta de tu casa.
            </p>

            <div className="location-box">
              <div className="location-details">
                <h4>UBICACIÓN EXACTA</h4>
                <p>📍 Av. Universidad 420, Barrio Universitario.</p>
                <p className="location-reference">
                  ⚠️ Referencia: Cerca de la casa del foráneo, donde siempre hay fiesta.
                </p>
              </div>
            </div>

            <div className="cta-buttons">
              <button className="btn-primary whatsapp-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                WhatsApp
              </button>
              <button className="btn-secondary delivery-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="5.5" cy="17.5" r="2.5"></circle>
                  <circle cx="18.5" cy="17.5" r="2.5"></circle>
                  <path d="M15 6h5l2 5v6h-2"></path>
                  <path d="M2 17h1.5"></path>
                  <path d="M8 17h8"></path>
                  <path d="M22 17h-1.5"></path>
                  <path d="M12 6V3"></path>
                  <path d="M15 6H8l-2 5h9l1-3"></path>
                  <path d="M5 11H2"></path>
                </svg>
                Delivery
              </button>
            </div>
          </div>

          <div className="cta-visual">
            <div className="visual-card">
              <img 
                src="https://content-viajes.nationalgeographic.com.es/medio/2022/05/26/de-hamburgo-para-el-mundo_b927e79b_2000x1333.jpg" 
                alt="Delivery Neon Night" 
                className="visual-img"
              />
              <div className="visual-overlay">
                <div className="visual-badge">
                  <span>ABIERTO</span>
                  <span>HASTA TARDE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>FORANEO BURGERS</h3>
            <p className="footer-slogan">Hechas para curar la cruda y quitarte el hambre. El spot definitivo.</p>
          </div>
          <div className="footer-info">
            <h4>VISÍTANOS</h4>
            <p>Av. Universidad 420,</p>
            <p>Barrio Universitario.</p>
            <p>Cerca de la casa del foráneo.</p>
          </div>
          <div className="footer-hours">
            <h4>HORARIOS</h4>
            <p>Jueves a Sábado: 8:00 PM - 5:00 AM</p>
            <p>Domingo: 1:00 PM - 10:00 PM</p>
          </div>
          <div className="footer-socials">
            <h4>SÍGUENOS</h4>
            <div className="social-links">
              <a href="#ig">Instagram</a>
              <a href="#tk">TikTok</a>
              <a href="#fb">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>FORANEO BURGERS © 2026. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
      </footer>
    </section>
  );
};

export default CTASection;
