import React, { Component } from 'react';

import ProjectCard from './ProjectCard';
import nfPic from '../assets/img/Natflax.JPG';
import ntPic from '../assets/img/Nexter.JPG';
import chatPic from '../assets/img/React-Chat.JPG';
import rePic from '../assets/img/Redux-Chat.JPG';

import styles from '../styles/Project.module.scss';

class Project extends Component {
    state = {
        natflax: {
            name: 'Natflax',
            img: nfPic,
            tech: ['react.js', 'redux', 'javascript', 'SASS'],
            ghlink: 'https://github.com/giangnguyen1992/netflix-clone',
            fblink: 'https://netflix-clone-118d5.firebaseapp.com/',
            desc: 'Ein kleiner Netflix-Klon, der mit Hilfe von axios Fake-Dateien holt.'
        },
        discordio: {
            name: 'Discordio',
            img: rePic,
            tech: ['react.js', 'redux', 'javascript', 'SASS'],
            ghlink: 'https://github.com/giangnguyen1992/react-redux-chat',
            fblink: 'https://first-redux-project-316e4.firebaseapp.com/',
            desc: 'Eine Chatanwendung mit zufallsgenerierten Daten.'
        },
        chatkit: {
            name: 'Chatkit-React',
            img: chatPic,
            tech: ['react.js', 'javascript'],
            ghlink: 'https://github.com/giangnguyen1992/react-chat-application',
            fblink: 'https://chatkit-chat.firebaseapp.com/',
            desc: 'Eine Chatanwendung mit dem Pusher Chatkit API.'
        },
        nexter: {
            name: 'nexter',
            img: ntPic,
            tech: ['SASS'],
            ghlink: 'https://github.com/giangnguyen1992/nexter',
            fblink: 'https://nexter-178b6.firebaseapp.com/',
            desc: 'Ein Demo-Projekt, das fast ausschließlich mit CSSGrid gebaut wurde.'
        }
    }

    render () {
        return (
            <section className={styles.Project}>
                <h1 className={styles.Project__title}>Meine Projekte</h1>
                <div className={styles.Project__block}>
                    <ProjectCard {...this.state.natflax} />
                    <ProjectCard {...this.state.discordio} />
                    <ProjectCard {...this.state.chatkit} />
                    <ProjectCard {...this.state.nexter} />
                </div>
            </section>
        );
    };
};

export default Project;