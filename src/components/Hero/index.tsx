import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';
import img9 from '../../img/9.jpg';
import img10 from '../../img/10.jpg';

export default function Hero() {
    return (
        <section className='carrosel'>
            <div className="carrosel-container">
                <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={1} autoplay={{ delay: 3500 }}>
                    <SwiperSlide>
                        <img src={img1} alt="ft_onibus_1" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="ft_onibus_2" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="ft_onibus_2" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="ft_onibus_2" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="ft_onibus_2" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt="ft_onibus_2" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} alt="ft_onibus_2" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img9} alt="ft_onibus_2" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="ft_onibus_2" className='carousel-image' />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='hero-text-overlay'>
                <h2 className='hero-text'>Chega de pegar conduções lotadas!</h2>
                <p className='hero-subtext'>Aqui você vai ao trabalho com <b>conforto</b> e <b>pontualidade.</b></p>
                <h3>Fretado Zona Leste. <b>Cidade Tiradentes</b> até o <b>Brás</b></h3>
                <a href="#contact" className='btn-reservar'>Quero reservar</a>
            </div>


        </section>
    )
}