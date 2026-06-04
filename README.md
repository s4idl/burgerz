# 🍔 Foraneo Burgers - Landing Page

Bienvenido a la landing page oficial de **Foraneo Burgers**, el spot definitivo para curar la cruda y quitarte el hambre. Esta aplicación web fue desarrollada utilizando **React y Vite**, con un diseño premium, oscuro y vibrante basado en colores neón.

## ✨ Características

- **Diseño Premium Neón:** Una paleta de colores oscuro con naranja y amarillo brillantes que resaltan estilo y modernidad.
- **Hero Interactivo 3D:** Una hamburguesa renderizada en 3D (`@react-three/fiber`) rotatoria y manipulable en el centro del Hero, enmarcada por un letrero dinámico de texto continuo.
- **Barra de Navegación "Liquid Glass":** Efecto glassmorphism (difuminado y transparencia) que se contrae elegantemente al hacer scroll.
- **Menú Completo Modal:** Una interfaz en cascada que muestra 13 hamburguesas exclusivas, acompañadas de miniaturas estilo *polaroid*.
- **Diseño Brutalista en el CTA:** Una tarjeta de ubicación cruda e impactante con referencias geográficas falsas e iconografía callejera.

## 🚀 Tecnologías

- **React 18**
- **Vite**
- **CSS Vanilla**
- **@react-three/fiber** & **@react-three/drei** (Renderizado y controles 3D)

## 🛠️ Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/s4idl/burgerz.git
   cd burgerz
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. Abre `http://localhost:5173/` en tu navegador.

## 📍 Estructura del Proyecto

- `src/components/Hero.jsx`: Lienzo 3D principal.
- `src/components/Atmosphere.jsx`: Sección de descripción visual e imágenes del "Spot".
- `src/components/MenuTeaser.jsx` y `MenuModal.jsx`: Top 3 del menú y listado completo animado.
- `src/components/CTASection.jsx`: Botones de orden y ubicación (Footer incluido).

---
*FORANEO BURGERS © 2026. Todos los derechos reservados.*
