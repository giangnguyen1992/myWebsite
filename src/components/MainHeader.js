import React from 'react';

import Button from '../containers/Button';

import styles from '../styles/MainHeader.module.scss';

const mainHeader = () => {
    return (
        <div className={styles.MainHeader}>
            <h1 className={styles.MainHeader__mainTitle}>Moin, 
                ich bin Giang.
            </h1>
            <h2 className={`${styles.MainHeader__title_2} ${styles.MainHeader__title}`}>Webentwickler,</h2>
            <h2 className={`${styles.MainHeader__title_3} ${styles.MainHeader__title}`}>Code Lieberhaber,</h2>
            <h2 className={`${styles.MainHeader__title_4} ${styles.MainHeader__title}`}>Selbstoptimierer.</h2>
            <div>
                <Button>Sag Hallo!</Button>
            </div>
        </div>
    );
};

export default mainHeader;