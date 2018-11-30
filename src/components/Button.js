import React from 'react';

import styles from '../styles/Button.module.scss';

const button = (props) => {
    return (
        <button className={styles.Button}>{props.children}</button>
    );
};

export default button;