import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setContent } from '../actions/index';

import styles from '../styles/Navbar.module.scss';

class Navbar extends Component {
    render () {
        

        return (
            <nav className={styles.Navbar}>
                <li data-content='about' className={styles.Navbar__item} onClick={this.props.dispatchContentAction}>Über mich</li>
                <li data-content='skills'  className={styles.Navbar__item} onClick={this.props.dispatchContentAction}>Meine Skills</li>
                <li data-content='project'  className={styles.Navbar__item} onClick={this.props.dispatchContentAction}>Meine Projekte</li>
                <li  className={styles.Navbar__item}>Giang Nguyen &copy;2018</li>
            </nav>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchContentAction: (e) => {
            const content = e.target.dataset.content;
            return dispatch(setContent(content));
        }
    }
}

export default connect(null, mapDispatchToProps)(Navbar);

