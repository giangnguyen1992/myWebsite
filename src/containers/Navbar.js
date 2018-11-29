import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../styles/Navbar.module.scss';

class Navbar extends Component {
    render () {
        return (
            <nav className={styles.Navbar}>
                <li className={styles.Navbar__item}>Über mich</li>
                <li className={styles.Navbar__item}>Meine Skills</li>
                <li className={styles.Navbar__item}>Meine Projekte</li>
                <li className={styles.Navbar__item}>Giang Nguyen &copy;2018</li>
            </nav>
        );
    };
};

export default Navbar;

