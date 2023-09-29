import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './PlanesItem.css';
import { Pagination } from 'swiper/modules';

const PlanesItem = () => {
  return (

        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                ckickable:true,
            }}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  '@1.50': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
            }}
            modules={[Pagination]}
            className='mySwiper'
        >
            <SwiperSlide>
                <div className="planes__contenedor__cards__card">
                <div className="planes__contenedor__cards__card__bloque-1">
                    <h2 className="bloque-1__titulo">Basic</h2>
                    <h3 className="bloque-1__subtitulo-1">
                    For individuals or teams just getting started with project
                    management.
                    </h3>
                    <h2 className="bloque-1__titulo-2">Free</h2>
                    <h3 className="bloque-1__subtitulo-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h3>
                    <button className="bloque-1__boton">¡Lo quiero!</button>
                </div>
                <div className="planes__contenedor__cards__card__bloque-2">
                    <h3 className="bloque-2__subtitulo-1">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h3>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-1"></i>
                    <h3 className="bloque-2__subtitulo-2">Lorem ipsum dolor sit..</h3>
                    </div>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-2"></i>
                    <h3 className="bloque-2__subtitulo-3">Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-3"></i>
                    <h3 className="bloque-2__subtitulo-4">Lorem ipsum dolor sit.</h3>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="planes__contenedor__cards__card">
                <div className="planes__contenedor__cards__card__bloque-1">
                    <h2 className="bloque-1__titulo">Basic x2</h2>
                    <h3 className="bloque-1__subtitulo-1">
                    For individuals or teams just getting started with project
                    management.
                    </h3>
                    <h2 className="bloque-1__titulo-2">Free</h2>
                    <h3 className="bloque-1__subtitulo-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h3>
                    <button className="btn bloque-1__boton">¡Lo quiero!</button>
                </div>
                <div className="planes__contenedor__cards__card__bloque-2">
                    <h3 className="bloque-2__subtitulo-1">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h3>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-1"></i>
                    <h3 className="bloque-2__subtitulo-2">Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-2"></i>
                    <h3 className="bloque-2__subtitulo-3">Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-3"></i>
                    <h3 className="bloque-2__subtitulo-4">Lorem ipsum dolor sit.</h3>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="planes__contenedor__cards__card">
                <div className="planes__contenedor__cards__card__bloque-1">
                    <h2 className="bloque-1__titulo">Basic x3</h2>
                    <h3 className="bloque-1__subtitulo-1">
                    For individuals or teams just getting started with project
                    management.
                    </h3>
                    <h2 className="bloque-1__titulo-2">Free</h2>
                    <h3 className="bloque-1__subtitulo-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h3>
                    <button className="btn bloque-1__boton">¡Lo quiero!</button>
                </div>
                <div className="planes__contenedor__cards__card__bloque-2">
                    <h3 className="bloque-2__subtitulo-1">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h3>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-1"></i>
                    <h3 className="bloque-2__subtitulo-2">Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-2"></i>
                    <h3 className="bloque-2__subtitulo-3">Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-3"></i>
                    <h3 className="bloque-2__subtitulo-4">Lorem ipsum dolor sit.</h3>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="planes__contenedor__cards__card">
                <div className="planes__contenedor__cards__card__bloque-1">
                    <h2 className="bloque-1__titulo">Basic x4</h2>
                    <h3 className="bloque-1__subtitulo-1">
                    For individuals or teams just getting started with project
                    management.
                    </h3>
                    <h2 className="bloque-1__titulo-2">Free</h2>
                    <h3 className="bloque-1__subtitulo-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h3>
                    <button className="btn bloque-1__boton">¡Lo quiero!</button>
                </div>
                <div className="planes__contenedor__cards__card__bloque-2">
                    <h3 className="bloque-2__subtitulo-1">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </h3>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-1"></i>
                    <h3 className="bloque-2__subtitulo-2">Lorem ipsum dolor sit.</h3>
                    </div>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-2"></i>
                    <h3 className="bloque-2__subtitulo-3">Lorem ipsum dolor sit.</h3>
    
                    </div>
                    <div className="bloque-2__items">
                    <i class="bi bi-check2 check-3"></i>
                    <h3 className="bloque-2__subtitulo-4">Lorem ipsum dolor sit.</h3>
                    </div>
                </div>
                </div>
            </SwiperSlide>
        </Swiper>
  );
};

export { PlanesItem };
