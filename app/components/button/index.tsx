import React from 'react';
import styles from "./index.module.scss";
import { ButtonInterface } from 'app/types';

const Index = ({ className, type, children, onClick }: ButtonInterface) => {

    const propStyle = className ? styles[className] : styles['default'];
    return (
        <button className={propStyle} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

const Spans = () => {
    return (
        <>
            <span></span>
            <span></span>
        </>
    )
}

interface CloseButtonInterface extends ButtonInterface {
    closeBtn?: JSX.Element
}

export const closeButton = ({ onClick, className, closeBtn }: CloseButtonInterface) => {

    const closeBtnDefault = closeBtn ? closeBtn : <Spans />;

    return (
        <Index type={'button'} className={className} onClick={onClick}>
            {closeBtnDefault}
        </Index>
    )
};

export default Index;
