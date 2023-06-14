'use client'
import React, { useState } from 'react';
import { classNamesInterface, TableInterface } from '../../types/index'
import { dataSort } from './utils';
import { CloseButton } from '../index';

interface Props extends classNamesInterface, TableInterface {
}

const Index = ({ className, dataTable, pagination }: Props) => {
    const [data, setData] = useState(dataSort(dataTable));
    const [reversed, setReversed] = useState(false);

    const handleClick = (data: any) => {
        const tempData =  dataSort([...data]);
        setReversed(!reversed);
        if (!reversed) return setData(tempData.reverse());
        if (reversed)  return setData(tempData); 
    }


    return (
        <>
            <table className={className}>
                <thead>
                    <tr>
                        <th onClick={() => handleClick(dataTable)}>ID</th>
                        <th>Tarea</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((datas: any) => {
                            return (
                                < tr key={datas.id} >
                                    <td>{datas.id}</td>
                                    <td>{datas.task}</td>
                                    <td>{datas.completed ? 'completed' : 'not completed'}</td>
                                    <td>{<CloseButton />}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table >
        </>

    );
};

export default Index;
