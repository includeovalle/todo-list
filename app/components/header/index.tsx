import React from 'react';
import styles from "./index.module.scss";
import { HeaderInterface } from '../../types/index';


const Index = ({ children,className }:HeaderInterface) => {
    const propStyle = className ? styles[className] : styles['default'];
    return (
        <header className={propStyle} >
            {children}
        </header>
    );
};

export default Index;
