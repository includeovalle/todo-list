import React from 'react';
import Link from 'next/link'
import styles from "./index.module.scss";

interface Props {
    className?: string;
    lis: string[];
    onClick?: () => void;
    links?: boolean;
    tasks?: boolean;
}
const Ul = ({ className, lis, onClick, links=false, tasks=false}: Props) => {
    //create some custo styles which receive className as props and 'default' as default value
    const propStyle = className ? [styles[className], styles['default']] : [styles['default']];

    console.log(lis)
    const customStyles = propStyle.join(' ');
    return (
        <ul className={customStyles}>
            {links &&
                lis.map((li, index) => {
                    return <Link href={`/${li}`} key={index}><li onClick={onClick}>{li}</li></Link>
                })
            }
            {!links &&
                lis.map((li, index) => {
                    return <li key={index} onClick={onClick}>{li}</li>
                })
            }
            {!links && tasks &&
                lis.map(({id, completed, tasks}) => {
                    console.log(id, typeof id)
                    return (
                        <li key={id}>
                            <span>{id}</span>
                            <span>{completed}</span>
                            <span>{tasks}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default Ul;
