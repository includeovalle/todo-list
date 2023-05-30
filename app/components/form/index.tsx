import React from "react";
import styles from "./index.module.scss";
import { Button } from "../index";
import { FormInterface } from "app/types/";


const Index = ({ className, children, buttonText, onSubmit }:FormInterface) => {

    const classProps = className ? styles.className : styles["default"]

    return (
        <form className={classProps} onSubmit={onSubmit}>
            {children}
            <Button type='submit' className={'form-btn'}>{buttonText}</Button>
        </form>
    );
};

export default Index;

