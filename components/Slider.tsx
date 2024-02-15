'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { painels } from './DataPainel';
import Image from 'next/image';
import styles from '@/Styles/slider.module.scss';

const Slider: React.FC = () => {

    return (
        <section className={styles.container}>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}                                                                                                                                                                                                                                                                                                                                                                 
                className="mySwiper"
                autoplay={{ delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {painels.map((painel) => (
                    <SwiperSlide key={painel.id} className={styles.SwiperSlide}>
                        <Image
                            src={painel.image}
                            alt='imagem painel'
                            className={styles.Img}

                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default Slider;