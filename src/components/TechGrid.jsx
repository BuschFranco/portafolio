// src/components/MySwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Estilos internos para personalizar el Swiper
const swiperStyles = {
  container: {
    width: '100%', // Ancho del contenedor
    height: '12.5rem', // Altura del contenedor

    padding: "1rem",

    borderTop: "2px solid rgba(255, 255, 255, 0.155)",
    borderBottom: "2px solid rgba(255, 255, 255, 0.155)",
    borderRadius: "1rem",

    cursor: "grab",


  },
  slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    color: '#fff',
  },
  image: {
    width: "100%",
    borderRadius: "0.5rem",

    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  }
};

export default function MySwiper() {
  return (
    <Swiper
    spaceBetween={16}
    slidesPerView={5}
    loop
    autoplay
    pagination={{ clickable: true }}
    breakpoints={{
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
      },
    }}
    style={swiperStyles.container}
    >
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/Javascript.webp" alt="imagen de JavaScripts" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/dynamics.webp" alt="imagen de Dynamics 365" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/astro.webp" alt="imagen de Astro" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/wordpress.webp" alt="imagen de WordPress" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/git.webp" alt="imagen de Git" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/c.webp" alt="imagen de C#" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/php.webp" alt="imagen de php" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/sql.webp" alt="imagen de SQL" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/tailwind.webp" alt="imagen de tailwind css" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/unity.webp" alt="imagen de Unity" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/react.webp" alt="imagen de React" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/bos.webp" alt="imagen de Bootstrap 5" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/x.webp" alt="imagen de X++" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/node.webp" alt="imagen de node" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/Python.webp" alt="imagen de python" /></SwiperSlide>
 
    </Swiper>
  );
}
