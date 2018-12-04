import React from 'react';

import styles from '../styles/Languages.module.scss';

const languages = () => {
    let allImg = ['HTML5','CSS3','SASS','Bootstrap','Javascript','jQuery','React','Redux','webpack','Gulp','GitHub','npm','WordPress'];
    let images = allImg.map(image => {
        return (
            <div key={image} className={styles.Languages__box}>
                <img className={styles.Languages__box_logo} src={require(`../assets/img/${image}.png`)} alt={image} />
                <p>{image}</p>
            </div>
        ); 
    });

    return (
        <div className={styles.Languages}>
            {images}
        </div>
    );
};

export default languages;