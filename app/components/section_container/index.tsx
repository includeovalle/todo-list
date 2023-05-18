import React from 'react';
import styles from "./index.module.scss";
interface Props {
    children?: React.ReactNode;
    className?: string;
    main?: boolean;
}
const Index = ({ children, className, main = false }: Props) => {
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
