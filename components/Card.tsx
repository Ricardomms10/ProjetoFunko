'use client'
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "@/Styles/Card.module.scss"

const Card: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=2",

    ];

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <section className={styles.container}>
            <a style={{ position: "relative", cursor: "pointer" }}>
                <Image src={images[currentImage]}
                    alt="random image"
                    width={199}
                    height={200}
                    className={styles.img}
                />
                <div style={{ position: "absolute", top: "50%", left: "10px", cursor: "pointer" }} onClick={handlePrevImage}>
                    <FaChevronLeft />
                </div>
                <div style={{ position: "absolute", top: "50%", right: "10px", cursor: "pointer" }} onClick={handleNextImage}>
                    <FaChevronRight />
                </div>
            </a>
            <h1>Funko Pop Deadpool</h1>
            <h3>R$ 100,00</h3>
            <div className={styles.boxInfo}>
                <p>Localização</p>
                <p>Dia postado</p>
            </div>
        </section>
    );
};

export default Card;
