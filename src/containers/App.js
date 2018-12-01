import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import SocialLinks from '../components/SocialLinks';
import Modal from '../components/Modal';
import { closeModal } from '../actions/index';

import styles from '../styles/App.module.scss';

class App extends Component {
    componentDidMount () {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27) {
                this.props.dispatchCloseModal();
            }
        })
    }

    render () {
        let content = null;

        if (this.props.main === 'about') {
            content = <About />
        } else if (this.props.main === 'skills') {
            content= <Skills />
        } else if (this.props.main === 'project') {
            content = <Project />
        };

        let modal = null;

        if (this.props.modal === true) {
            modal = <Modal />
        };

        return (
            <main className={styles.App}>
                <Navbar />
                {content}
                <SocialLinks />
                {modal}
            </main>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        main: state.main,
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchCloseModal: () => {
            dispatch(closeModal())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

