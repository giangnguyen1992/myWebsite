import React, { Component } from 'react';

import EmailForm from './EmailForm';

import styles from '../styles/Modal.module.scss';

class Modal extends Component {
    componentWillMount () {
        document.addEventListener('mousedown', this.handleClick, false)
    };

    componentWillUnmount () {
        document.removeEventListener('mousedown', this.handleClick, false)
    };

    handleClick = (e) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.props.click();
    };

    render () {
        return (
            <div className={styles.Modal}>
                <div ref={node => this.node = node} className={styles.Modal__content}>
                    <EmailForm />
                    <button onClick={this.props.click} className={styles.Modal__closeBtn}>
                        <i className={`fas fa-times`}></i>
                    </button>
                </div>
            </div>
            );
    }
}    


export default Modal;