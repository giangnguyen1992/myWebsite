import React from 'react';

import Button from '../containers/Button';

import styles from '../styles/emailForm.module.scss';

const emailform = () => {
    return (
        <form className={styles.emailForm} action='https://formspree.io/tgn1992@hotmail.de' method="POST">
            <h2 className={styles.emailForm__title}>Deine Anfrage</h2>
            <p className={styles.emailForm__text}>Lass uns zusammen einen Kaffee trinken oder einfach nur quatchen. <br /> Fülle einfach das Formular aus und ich melde mich so schnell wie möglich bei dir!</p>
            <div className={styles.emailForm__upper}>
                <input className={styles.emailForm__input} type="text" name="name" placeholder="Name"/>
                <input className={styles.emailForm__input} type="email" name="_replyto" placeholder="Email"/>
            </div>
            <textarea className={styles.emailForm__textInput} name="message" placeholder='Wie kann ich helfen?'></textarea>
            <Button type="submit" value="Send">Absenden</Button>
            <input hidden type="text" name="_gotcha" />
        </form>
    );
};

export default emailform;