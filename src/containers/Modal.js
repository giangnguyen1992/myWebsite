import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmailForm from '../components/emailForm';
import { closeModal } from '../actions/index';

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

        this.props.dispatchCloseModal();
    };

    render () {
        return (
            <div className={styles.Modal}>
                <div ref={node => this.node = node} className={styles.Modal__content}>
                    <EmailForm />
                    <button onClick={this.props.dispatchCloseModal} className={styles.Modal__closeBtn}>
                        <i className={`fas fa-times`}></i>
                    </button>
                </div>
            </div>
            );
    }
}    

const mapDispatchToProps = dispatch => {
    return {
        dispatchCloseModal: () => {
            dispatch(closeModal());
        }
    };
};

export default connect(null, mapDispatchToProps) (Modal);