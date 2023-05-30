import React, { forwardRef, ForwardedRef } from 'react';
import styles from "./index.module.scss";
import { Button } from "../index";
import { FormInterface } from "app/types/";


const Index = forwardRef(({ className, children, buttonText, onSubmit }: FormInterface, ref: ForwardedRef<HTMLFormElement>) => {
    const classProps = className ? styles.className : styles["default"]

    return (
        <form className={classProps} onSubmit={onSubmit}>
            {children}
            <Button type='submit' className={'form-btn'}>{buttonText}</Button>
        </form>
    );
}
);

Index.displayName = 'Index';
export default Index;

