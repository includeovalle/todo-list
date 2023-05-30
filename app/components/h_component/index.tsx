import React from 'react';
import styles from "./index.module.scss";
import { H_Interface } from "app/types/";

//asign a button type default is button

const Index = ({ className, type, children }: H_Interface) => {
    const propStyle = className ? styles[className] : styles['default'];


    return (
        <>
            {type === 1 &&
                <h1 className={propStyle}>{children}</h1>
            }
            {type === 2 &&
                <h2 className={propStyle}>{children}</h2>
            }
            {type === 3 &&
                <h3 className={propStyle}>{children}</h3>
            }
            {type === 4 &&
                <h4 className={propStyle}>{children}</h4>
            }
        </>
    );
};

export default Index;

