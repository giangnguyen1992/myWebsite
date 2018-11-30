import React from 'react';

import Button from './Button';

import styles from '../styles/MainHeader.module.scss';

const mainHeader = () => {
    return (
        <div className={styles.MainHeader}>
            <h1 className={styles.MainHeader__title}>Moin, 
                ich bin Giang.
            </h1>
            <h2 className={styles.MainHeader__title2}>Webentwickler,</h2>
            <h2 className={styles.MainHeader__title3}>Code Lieberhaber,</h2>
            <h2 className={styles.MainHeader__title4}>Selbstoptimierer.</h2>
            <Button>Sag Hallo!</Button>
        </div>
    );
};

export default mainHeader;