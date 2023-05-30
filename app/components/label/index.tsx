import React from "react";
import styles from "./index.module.scss";
import {LabelInterface} from "app/types/";


const Index = ({ className, type, placeholder, children, name }: LabelInterface) => {


    const classProps = className ? styles.className : styles["row"]

        const text= children ? children : "enter text"

    return (
    <label className={classProps}>
    <span>{text}</span>
        <input name={name} type={type} placeholder={placeholder} />
    </label>
    );
};


export const ColLabel = ({ className, type, placeholder, children, name }: Props)=> {

    const classProps = className ? styles.className : styles["column"]

        const text= children ? children : "enter text"

    return (
    <label className={classProps}>
    <span>{text}</span>
        <input name={name} type={type} placeholder={placeholder} />
    </label>
    );
};

export default Index;
