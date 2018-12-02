import React from 'react';

import Button from '../containers/Button';

import styles from '../styles/Skills.module.scss';

const skills = () => {
    const iconStyle= {
        color: '#6abea7'
    };

    const stackedStyle = {
        color: '#f7f6f1'
    };

    let allImg = ['HTML5','CSS3','SASS','Bootstrap','Javascript','jQuery','React','Redux','webpack','Gulp','GitHub','npm','WordPress'];
    let images = allImg.map(image => {
        return (
            <div key={image} className={styles.Skills__right_box}>
                <img className={styles.Skills__right_logo} src={require(`../assets/img/${image}.png`)} alt={image} />
                <p>{image}</p>
            </div>
        ); 
    });

    return (
        <div className={styles.Skills}>
            <h1 className={styles.Skills__title}> Meine Skills</h1>
            <ul className={styles.Skills__list}>
                <li className={styles.Skills__list_item}>
                    <span className={`fa-stack fa-2x`}>
                        <i className={`fas fa-circle fa-stack-2x `} style={iconStyle}></i>
                        <i className={`far fa-lightbulb fa-stack-1x`} style={stackedStyle}></i>
                    </span>
                    <p>Intuitive Webseiten</p>
                </li>
                <li className={styles.Skills__list_item}>
                    <span className={`fa-stack fa-2x`}>
                        <i className={`fas fa-circle fa-stack-2x `} style={iconStyle}></i>
                        <i className={`fas fa-code fa-stack-1x`} style={stackedStyle}></i>
                    </span>
                    <p>Saubere Codes</p>
                </li>
                <li className={styles.Skills__list_item}>
                    <span className={`fa-stack fa-2x`}>
                        <i className={`fas fa-circle fa-stack-2x `} style={iconStyle}></i>
                        <i className={`fas fa-user-edit fa-stack-1x`} style={stackedStyle}></i>
                    </span>
                    <p>Individuel designt</p>
                </li>
                <li className={styles.Skills__list_item}>
                    <span className={`fa-stack fa-2x`}>
                        <i className={`fas fa-circle fa-stack-2x `} style={iconStyle}></i>
                        <i className={`far fa-kiss-wink-heart fa-stack-1x`} style={stackedStyle}></i>
                    </span>
                    <p>Mit Liebe gebaut</p>
                </li>
            </ul>
            <div className={styles.Skills__upper}>
                <div className={styles.Skills__left}>
                    <p className={styles.Skills__left_text}>Ich bin selbst ausgebildeter Webentwickler mit Leidenschaft für saubere Codes und intuitive 
                        Webseiten aus Hamburg. Durch meine Neugierde für die neuesten Trends und Frameworks, bleibe 
                        ich immer up to date, um Projekte zeitgemäß umzusetzen.
                    </p>
                    <Button>Lasst uns loslegen!</Button>
                </div>
                <div className={styles.Skills__right}>
                    {images}
                </div>
            </div>
        </div>
    );
};

export default skills;