'use client'

import SimpleTable from './simple';
import React, { useEffect,  useState } from 'react';
import styles from './index.module.scss';
import { classNamesInterface, TableInterface } from '../../types/index'

interface Props extends classNamesInterface, TableInterface { };



const Index = ({ className, dataTable, pagination, rows, sort, reverse }: Props) => {


    const classProps = className ? styles[className] : styles['default'];

    const [isPaginated, setIsPaginated ] = useState(pagination);


    useEffect(()=>{

    },[isPaginated]);
    //update pagination value
    const handlePagination = () => {
        setIsPaginated(!isPaginated);
    }
    return (
        <>
            {
                pagination &&
                <div>other table</div>
            }
            {
                !pagination &&
                    <>
                <SimpleTable
                    className={classProps}
                    dataTable={dataTable ? dataTable : null}
                    pagination={pagination}
                    rows={rows}
                    sort={sort}
                    reverse={reverse}
                />
                <button onClick={()=> {handlePagination()}}>pagination</button>
                </>
            }
        </>
    );
};

export default Index;
