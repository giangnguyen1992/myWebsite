import React from 'react';

import logo from '../assets/img/hplogo.png';

import styles from '../styles/Navbar.module.scss';

const navbar = (props) => {
        return (
            <nav className={styles.Navbar}>
                <li className={styles.Navbar__item}><img data-content='about' onClick={props.click} className={styles.Navbar__logo} src={logo} alt='Website logo' /></li>
                <div className={styles.Navbar__box}>
                    <li data-content='about' className={`${styles.Navbar__item} ${props.active === 'about' ? styles.active : null}`} onClick={props.click}>Über mich</li>
                    <li data-content='skills'  className={`${styles.Navbar__item} ${props.active === 'skills' ? styles.active : null}`} onClick={props.click}>Meine Skills</li>
                    <li data-content='project'  className={`${styles.Navbar__item} ${props.active === 'project' ? styles.active : null}`} onClick={props.click}>Meine Projekte</li>
                </div>
                <li className={styles.Navbar__imp}>Giang Nguyen &copy;2018</li>
            </nav>
        );
};

export default navbar;

