# Landing Page – Asesoría en Isapres (Chile)

Landing page desarrollada con **React + Vite + Tailwind CSS** para un asesor de planes de salud en Chile.  
El objetivo principal es **generar leads calificados** (formulario y WhatsApp) para personas interesadas en **cambiarse de isapre o ajustar su plan de salud**.

---

## 🧩 Objetivo del proyecto

- Mostrar una propuesta profesional y clara de **asesoría en planes de isapre**.
- Capturar leads mediante:
  - **Formulario de contacto** (integrable con Netlify Forms).
  - **Botones de WhatsApp** con mensaje pre-rellenado.
- Medir rendimiento mediante **Google Analytics 4 (GA4)** y **Google Tag Manager (GTM)**.
- Dar soporte a futuras campañas de **Google Ads** (tráfico frío y tibio).

---

## ✨ Características principales

- Hero enfocado en la acción:  
  “Cámbiate de isapre con asesoría experta en Chile”.
- Secciones principales:
  - **¿Por qué cambiar de isapre?**
  - **Qué hago por ti / Propuesta de valor**
  - **Red de isapres con las que se trabaja** (carrusel de logos en escala de grises, loop infinito).
  - **Cómo funciona** (proceso en 3 pasos).
  - **Testimonios** (carrusel infinito animado).
  - **Preguntas frecuentes (FAQ)**.
  - **Formulario de contacto + CTA a WhatsApp**.
- Carruseles horizontales:
  - Testimonios.
  - Isapres (logos), con difuminado lateral y loop infinito.
- Diseño responsive:
  - Adaptado a desktop, tablet y mobile.
- Preparado para:
  - **Netlify Forms** (captura de leads sin backend propio).
  - **GA4 + GTM** con eventos (`whatsapp_click`, `lead_form_submit`).

---

## 🛠️ Stack tecnológico

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deploy recomendado:
  - [Netlify](https://www.netlify.com/) o [Vercel](https://vercel.com/)
- Analítica:
  - **Google Tag Manager** (GTM)
  - **Google Analytics 4** (GA4)

---

## 📁 Estructura del proyecto (resumen)

```text
src/
├─ main.jsx
├─ App.jsx
├─ index.css
├─ assets/
│  └─ isapres/        # Logos de isapres (PNG/JPG)
└─ components/
   ├─ layout/
   │  ├─ Header.jsx
   │  └─ Footer.jsx
   ├─ sections/
   │  ├─ HeroSection.jsx
   │  ├─ WhyChangeSection
