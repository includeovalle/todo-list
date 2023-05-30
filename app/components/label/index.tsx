import React from "react";
import styles from "./index.module.scss";

interface Props {
    className?: string;
    type: "submit" | "text" | "password" | "email" | "number";
    placeholder?: string;
    children?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Index = ({ className, type, placeholder, children, name, onChange }: Props) => {


    const classProps = className ? styles.className : styles["row"]

        const text= children ? children : "enter text"

    return (
    <label className={classProps}>
    <span>{text}</span>
        <input type={type} placeholder={placeholder} />
    </label>
    );
};


export const ColLabel = ({ className, type, placeholder, children, name, onChange }: Props)=> {

    const classProps = className ? styles.className : styles["column"]

        const text= children ? children : "enter text"

    return (
    <label className={classProps}>
    <span>{text}</span>
    <input name={name} type={type} placeholder={placeholder} onChange={onChange}/>
    </label>
    );
};

export default Index;
