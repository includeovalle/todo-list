import styles from "./index.module.scss"
import { Button } from '../index';
import {DialogInterface} from "../../types/index";
import React, { forwardRef } from 'react';

//closeBtn must be able to receive a component as a prop

const Index = forwardRef<HTMLDialogElement, DialogInterface>(({ closeBtn,onClick, children, className }: DialogInterface, ref) => {

    const propStyle = className ? styles[className] : styles['default'];
    return (
        <>
            <dialog ref={ref} className={propStyle}>
                <Button className={'closeHamburger'} onClick={onClick}>{closeBtn}</Button>
                {children}
            </dialog>
        </>
    )
});

Index.displayName = 'Dialog';
export default Index;


