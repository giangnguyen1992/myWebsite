import React from 'react';

import MainImg from './MainImg';
import MainHeader from './MainHeader';

import styles from '../styles/About.module.scss';

const about  = () => {
    return (
        <section className={styles.About}>
            <MainHeader />
            <MainImg />
        </section>
    );
};

export default about;