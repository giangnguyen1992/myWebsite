import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Project';
import SocialLinks from '../components/SocialLinks';

import styles from '../styles/App.module.scss';

class App extends Component {
    

    render () {
        let content = null;

        if (this.props.main === 'about') {
            content = <About />
        } else if (this.props.main === 'skills') {
            content= <Skills />
        } else {
            content = <Project />
        };

        return (
            <main className={styles.App}>
                <Navbar />
                {content}
                <SocialLinks />
            </main>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        main: state.main
    };
};

export default connect(mapStateToProps, null)(App);