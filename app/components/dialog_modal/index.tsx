import styles from "./index.module.scss"
import { Button } from '../index';
import { DialogInterface } from "../../types/index";
import React, { forwardRef, ForwardedRef } from 'react';

//closeBtn must be able to receive a component as a prop

const Spans = () => {
    return (
        <>
            <span></span>
            <span></span>
        </>
    )
}

const Index = forwardRef<HTMLDialogElement, DialogInterface>(({ closeBtn, onClick, children, className }: DialogInterface, ref:ForwardedRef<HTMLDialogElement>) => {

    const closeBtnDefault = closeBtn ? closeBtn : <Spans />;

    const propStyle = className ? styles[className] : styles['default'];

    return (
            <dialog ref={ref} className={propStyle}>
                <Button className={'closeHamburger'} onClick={onClick}>{closeBtnDefault}</Button>
                {children}
            </dialog>
    )
});

Index.displayName = 'Dialog';
export default Index;


