import React from 'react';

import styles from '../styles/ProjectCard.module.scss'

const projectCard = (props) => {
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.ProjectCard__img}>
                <img className={styles.ProjectCard__img_pic} src={props.img} alt={props.name} />
            </div>
            <div className={styles.ProjectCard__content}>
                <ul className={styles.ProjectCard__content_techList}>
                    {props.tech.map((t, index) => <li className={styles.ProjectCard__content_techList_tech} key={index}>{t}</li>)}
                </ul>
                <h2 className={styles.ProjectCard__content_title}>{props.name}</h2>
                <p className={styles.ProjectCard__content_text}>{props.desc}</p>
                <div className={styles.ProjectCard__content_linkbox}>
                <a href={props.fblink} target='_blank' rel="noopener noreferrer" className={styles.ProjectCard__content_linkbox_link}>
                    <i className={`fas fa-external-link-alt`}></i>
                </a>
                <a href={props.ghlink} target='_blank' rel="noopener noreferrer" className={styles.ProjectCard__content_linkbox_link}>
                    <i className={`fab fa-github`}></i>
                </a>
            </div>
            </div>
        </div>
    );
};

export default projectCard;