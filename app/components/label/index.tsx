import React from "react";
import styles from "./index.module.scss";

interface Props {
    className?: string;
    type: "submit" | "text" | "password" | "email" | "number";
    placeholder?: string;
    children?: string;
}

const Index = ({ className, type, placeholder, children }: Props) => {


    const classProps = className ? styles.className : styles["row"]

        const text= children ? children : "enter text"

    return (
    <label className={classProps}>
    <span>{children}</span>
        <input type={type} placeholder={placeholder} />
    </label>
    );
};


export const ColLabel = ({ className, type, placeholder, children }: Props)=> {

    const classProps = className ? styles.className : styles["column"]

        const text= children ? children : "enter text"

    return (
    <label className={classProps}>
    <span>{children}</span>
        <input type={type} placeholder={placeholder} />
    </label>
    );
};

export default Index;
