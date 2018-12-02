import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../actions/index';

import styles from '../styles/Button.module.scss';

const button = (props) => {
    return (
        <button onClick={props.dispatchModal} className={styles.Button}>{props.children}</button>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchModal: () => {
            return dispatch(openModal());
        }
    }
}

export default connect(null, mapDispatchToProps)(button);