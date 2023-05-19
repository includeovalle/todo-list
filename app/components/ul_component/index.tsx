import React from 'react';
import Link from 'next/link'
import styles from "./index.module.scss";
import { UlInterface } from "../../types/index";

const Ul = ({ className, lis, onClick, links=false}: UlInterface) => {
    //create some custo styles which receive className as props and 'default' as default value
    const propStyle = className ? [styles[className], styles['default']] : [styles['default']];

    const customStyles = propStyle.join(' ');
    return (
        <ul className={customStyles}>
            {links &&
                lis.map((li:React.ReactNode , index:number) => {
                    return <Link href={`/${li}`} key={index}><li onClick={onClick}>{li}</li></Link>
                })
            }
            {!links &&
                lis.map((li:React.ReactNode , index:number) => {
                    return <li key={index} onClick={onClick}>{li}</li>
                })
            }
        </ul>
    )
};

export default Ul;
