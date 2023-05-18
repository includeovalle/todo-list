import React from "react";
import styles from "./index.module.scss";
import { Button } from "../index";

interface Props {
    className?: string;
    children: React.ReactNode;
    buttonText: string;
}

const Index = ({ className, children, buttonText }:Props) => {

    const classProps = className ? styles.className : styles["default"]

    return (
        <form className={classProps}>
            {children}
            <Button className={'form-btn'}>{buttonText}</Button>
        </form>
    );
};

export default Index;

