import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store/index';
import App from './App';

import '../styles/Global.scss';
import styles from '../styles/Root.module.scss';

const Root = () => {
    return (
        <Provider store={store}>
            <div className={styles.Root}>
                <App />
            </div>
        </Provider>
    );
}; 


export default Root;