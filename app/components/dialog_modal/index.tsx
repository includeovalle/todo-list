import styles from "./index.module.scss"
import { Button } from '../index';
import React, { forwardRef } from 'react';

//closeBtn must be able to receive a component as a prop
interface Props {
    closeBtn: React.ReactNode;
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
}

const Index = forwardRef<HTMLDialogElement, Props>(({ closeBtn,onClick, children, className }: Props, ref) => {

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


