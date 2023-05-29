import styles from "./index.module.scss"
import { CloseButton } from '../index';
import { DialogInterface } from "../../types/index";
import React, { forwardRef, ForwardedRef } from 'react';

//closeBtn must be able to receive a component as a prop


const Index = forwardRef<HTMLDialogElement, DialogInterface>(({ closeBtn, onClick, children, className }: DialogInterface, ref:ForwardedRef<HTMLDialogElement>) => {


    const propStyle = className ? styles[className] : styles['default'];

    return (
            <dialog ref={ref} className={propStyle}>
                <CloseButton className={"closeHamburger"} onClick={onClick}>{closeBtn}</CloseButton>
                {children}
            </dialog>
    )
});

Index.displayName = 'Dialog';
export default Index;


