import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import SocialLinks from '../components/SocialLinks';
import Modal from '../components/Modal';
import { closeModal, setContent, openModal, setNight } from '../actions/index';

import styles from '../styles/App.module.scss';

class App extends Component {
    componentDidMount () {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27) {
                this.props.dispatchCloseModal();
            }
        })
    };

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
            modal = <Modal click={() => this.props.dispatchCloseModal()}/>
        };

        return (
            <main className={`${styles.App} ${this.props.nightMode ? styles.nightmode : null}`}>
                <Navbar active={this.props.main} click={(content) => this.props.dispatchContentAction(content)} />
                {content}
                <SocialLinks night={() => this.props.dispatchNightMode()} click={() => this.props.dispatchModal()}/>
                {modal}
            </main>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        main: state.main,
        modal: state.modal,
        nightMode: state.nightMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchNightMode: () => {
            return dispatch(setNight());
        },
        dispatchModal: () => {
            return dispatch(openModal());
        },
        dispatchCloseModal: () => {
            dispatch(closeModal())
        },
        dispatchContentAction: (e) => {
            const content = e.target.dataset.content;
            return dispatch(setContent(content));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

