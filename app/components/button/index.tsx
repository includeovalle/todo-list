import React from 'react';
import styles from "./index.module.scss";
import { ButtonInterface } from '../../types/index';

const Index = ({ className, type, children, onClick }: ButtonInterface) => {
    const propStyle = className ? styles[className] : styles['default'];

    return (
        <button className={propStyle} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Index;
