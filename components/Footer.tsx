import React from "react";
import styles from "@/Styles/Footer.module.scss"

const Footer: React.FC = () => {

    return (
        <footer className={styles.container}>
            <div className={styles.boxInfo}>
                <a>
                    <h3>Sobre Nosso</h3>
                </a>
                <a>
                    <h3>Anunciar pela Caça</h3>
                </a>
                <a>
                    <h3>Dicas de segurança</h3>
                </a>
                <a>
                    <h3>Termos de uso</h3>
                </a>
            </div>

            <p>Feito com amor por <span>Ricardo Malta</span></p>


        </footer>
    )
}

export default Footer;