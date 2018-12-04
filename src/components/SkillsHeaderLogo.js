import React from 'react';

import styles from '../styles/SkillsHeaderLogo.module.scss';

const skillsHeaderLogo = () => {
    const iconStyle= {
        color: '#6abea7'
    };

    const stackedStyle = {
        color: '#f7f6f1'
    };

    return (
        <ul className={styles.SkillsHeaderLogo}>
            <li className={styles.SkillsHeaderLogo__item}>
                <span className={`fa-stack fa-2x`}>
                    <i className={`fas fa-circle fa-stack-2x `} style={iconStyle}></i>
                    <i className={`far fa-lightbulb fa-stack-1x`} style={stackedStyle}></i>
                </span>
                <p>Intuitive Webseiten</p>
            </li>
            <li className={`${styles.SkillsHeaderLogo__item} ${styles.SkillsHeaderLogo__item2}`}>
                <span className={`fa-stack fa-2x`}>
                    <i className={`fas fa-circle fa-stack-2x `} style={iconStyle}></i>
                    <i className={`fas fa-code fa-stack-1x`} style={stackedStyle}></i>
                </span>
                <p>Saubere Codes</p>
            </li>
            <li className={`${styles.SkillsHeaderLogo__item} ${styles.SkillsHeaderLogo__item3}`}>
                <span className={`fa-stack fa-2x`}>
                    <i className={`fas fa-circle fa-stack-2x `} style={iconStyle}></i>
                    <i className={`fas fa-user-edit fa-stack-1x`} style={stackedStyle}></i>
                </span>
                <p>Individuel designt</p>
            </li>
            <li className={`${styles.SkillsHeaderLogo__item} ${styles.SkillsHeaderLogo__item4}`}>
                <span className={`fa-stack fa-2x`}>
                    <i className={`fas fa-circle fa-stack-2x `} style={iconStyle}></i>
                    <i className={`far fa-kiss-wink-heart fa-stack-1x`} style={stackedStyle}></i>
                </span>
                <p>Mit Liebe gebaut</p>
            </li>
        </ul>
    );
};

export default skillsHeaderLogo;