import React from 'react';

import Button from '../containers/Button';
import SkillsHeaderLogo from './SkillsHeaderLogo';
import Languages from './Languages';

import styles from '../styles/Skills.module.scss';

const skills = () => {
    return (
        <section className={styles.Skills}>
            <h1 className={styles.Skills__title}> Meine Skills</h1>
            <SkillsHeaderLogo />
            <div className={styles.Skills__upper}>
                <div className={styles.Skills__left}>
                    <p className={styles.Skills__left_text}>
                        Ich bin Frontend Entwickler mit Leidenschaft für saubere Codes und intuitive 
                        Webseiten aus Hamburg. Durch meine Neugierde für die neuesten Trends und Frameworks, bleibe 
                        ich immer up to date, um Projekte zeitgemäß umzusetzen.
                    </p>
                    <p className={styles.Skills__left_text}>
                    Mein Fokus liegt bei Anwendungen, die in <span className={styles.Skills__red}>React und Javascript</span> geschrieben sind. 
                    One-way Datenfluss-Architekturen, 
                    wie <span className={styles.Skills__red}>Redux</span>, nutze ich neuerdings besonders häufig. 
                    <br />
                    <br />
                    Erfahrungen und Fähigkeiten die ich in der Frontend-Entwicklung gesammelt habe beinhalten unter anderem:
                    </p>
                    <ul className={`${styles.Skills__left_text} ${styles.Skills__red}`}>
                        <li>die neuesten ES6-Eigenschaften und ein hohes Verständnis im allgemeinen Javascript</li>
                        <li>CSS3 Skills wie Flexbox und CSSGrid. Diese nutze ich, um responsive Designs zu ermöglichen</li>
                        <li>ein gutes Gespür für Design und UI</li>
                    </ul>
                    <p className={styles.Skills__left_text}>
                    Wenn du Lust hast mit mir zusammen zu arbeiten, lass es mich wissen.
                    </p>
                    <Button>Lasst uns loslegen!</Button>
                </div>
                <Languages />
            </div>
        </section>
    );
};

export default skills;