import React from "react";
import styles from "./index.module.scss";
import { LabelInterface } from "app/types/";



const Index = ({ className, type, placeholder, children, min, max, name, onChange, value, onClick }: LabelInterface) => {


    const classProps = className ? styles[className] : styles["row"]

    const text = children ? children : "enter text"

    return (
        <label onClick={onClick} className={classProps}>
            <span>{text}</span>
            <input name={name}
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            min={min}
            max={max}
            onChange={onChange}
            />
        </label>
    );
};


export const ColLabel = ({ className, type, placeholder, children, name, onChange }: LabelInterface) => {

    const classProps = className ? styles[className] : styles["column"]

    const text = children ? children : "enter text"

    return (
        <label className={classProps}>
            <span>{text}</span>
            <input name={name} type={type} placeholder={placeholder} onChange={onChange} />
        </label>
    );
};

export default Index;
