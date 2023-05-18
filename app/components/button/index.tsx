import React from 'react';
import styles from "./index.module.scss";

//asign a button type default is button
interface buttonProps {
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Index = ({ className, type, children, onClick }: buttonProps) => {
    const propStyle = className ? styles[className] : styles['default'];

    return (
        <button className={propStyle} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Index;
