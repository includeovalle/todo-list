import React from "react";
import styles from "./index.module.scss";

interface Props {
    className?: string;
    type: "submit" | "text" | "password" | "email" | "number";
    placeholder?: string;
    children?: React.ReactNode;
}

const Index = ({ className, type, placeholder, children }: Props) => {

    const classProps = className ? styles.className : styles["row"]

    return (
        <label className={classProps}>
            {children}
            <input type={type} placeholder={placeholder} />
        </label>
    );
};


export const ColLabel = ({ className, type, placeholder, children }: Props)=> {

    const classProps = className ? styles.className : styles["column"]

    return (
    <label className={classProps}>
        {children}
        <input type={type} placeholder={placeholder} />
    </label>
    );
};

export default Index;
