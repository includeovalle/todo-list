import React from 'react';
import styles from "./index.module.scss";

const Index = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <header className={styles.default} >
            {children}
        </header>
    );
};

export default Index;
