'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { dataBtn } from './DataBtn';
import styles from '@/Styles/CarroselBtn.module.scss';

const CarroselBtn: React.FC = () => {
    const breakpoints = {
        320: {
            slidesPerView: 5,
        },
        480: {
            slidesPerView: 8,
        },
        768: {
            slidesPerView: 10,
        },
    };

    return (
        <div className={styles.container}>
            <h2>ENCONTRE AQUI!</h2>
            <p>O FUNKO QUE FALTA NA SUA COLEÇÃO</p>
            <Swiper
                className={styles.customSwiper}
                slidesPerView={3}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay, Navigation]}
                breakpoints={breakpoints}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                loop={true} 
                centeredSlides={true} 
                spaceBetween={10} 
            >
                {dataBtn.map((item) => (
                    <SwiperSlide className={styles.customSwipersLide} key={item.id}>
                        <div className={styles.slideItem}>
                            <Image src={item.image} alt={item.name} width={200} height={200} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default CarroselBtn;
