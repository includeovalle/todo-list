import React from "react";
import styles from "./index.module.scss";
import { Button } from "../index";
import { FormInterface } from "../../types/index";


const Index = ({ className, children, buttonText }:FormInterface) => {

    const classProps = className ? styles.className : styles["default"]

    return (
        <form className={classProps}>
            {children}
            <Button className={'form-btn'}>{buttonText}</Button>
        </form>
    );
};

export default Index;

