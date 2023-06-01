import React from 'react';
import styles from "./index.module.scss";
import { SectionInterface } from '@app/types';

const Index = ({ children, className, main = false }: SectionInterface) => {
    const propStyle = className ? styles[className] : styles['default'];
    return (
        <>

            {main &&
                <main className={propStyle}>
                    {children}
                </main>
            }

            {
                !main &&
                <section className={propStyle}>
                    {children}
                </section>
            }
        </>
    );
};

export default Index;
