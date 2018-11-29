import React from 'react';

import img from '../assets/img/Me.jpg';

import styles from '../styles/MainImage.module.scss';

const mainImg = () => {
    return (
        <div className={styles.MainImg}>
            <img className={styles.MainImg__img} src={img} alt='It is me' />
        </div>
    );
};

export default mainImg;