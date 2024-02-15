import React from 'react';
import styles from '../Styles/navBar.module.scss';
import Logo from '../public/assests/Logo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Navbar: React.FC = () => {


    return (
        <nav className={styles.navbar}>
            <Image
                alt='logo'
                src={Logo}
                width={400}
                height={70}
                className={styles.logo} />
            <div className={styles.search}>
                <input type="text" placeholder="Pesquisar Funko" />
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <div className={styles.links}>
                <a href="#">Home</a>
                <a href="#">Como Comprar</a>
            </div>

        </nav>
    );
};

export default Navbar;
