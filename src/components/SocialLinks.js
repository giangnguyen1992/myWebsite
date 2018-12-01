import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../actions/index';

import styles from '../styles/SocialLinks.module.scss';

const socialLinks = (props) => {
    return (
        <div className={styles.SocialLinks}>
            <button className={styles.Nightmode}> <i className={`fas fa-moon`}></i></button>
            <p className={styles.SocialLinks__para}>Kontakt</p>
            <a href='https://www.facebook.com/TaeGiang' target='_blank' rel="noopener noreferrer" className={styles.SocialLinks__link}>
                <i className={`fab fa-facebook-f`}></i>
            </a>
            <a href='https://www.xing.com/profile/Giang_Nguyen48/cv?sc_o=mxb_p' target='_blank' rel="noopener noreferrer" className={styles.SocialLinks__link}>
                <i className={`fab fa-xing`}></i>
            </a>
            <a href='https://github.com/giangnguyen1992' target='_blank' rel="noopener noreferrer" className={styles.SocialLinks__link}>
                <i className={`fab fa-github`}></i>
            </a>
            <button onClick={props.dispatchModal} className={styles.SocialLinks__link}>
                <i className={`fas fa-envelope`}></i>
            </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchModal: () => {
            return dispatch(openModal());
        }
    }
}

export default connect(null, mapDispatchToProps)(socialLinks);