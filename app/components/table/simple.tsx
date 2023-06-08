'use client'
import React, { useState } from 'react';
import { classNamesInterface, TableInterface } from '../../types/index'
import { dataSort } from './utils';
import { CloseButton } from '../index';

interface Props extends classNamesInterface, TableInterface {
    setIsPaginated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index = ({ className, dataTable, pagination, rows, sort, reverse }: Props) => {

    const [data, setData] = useState(dataTable);
    const [sorted, setSorted] = useState(sort);
    const [reversed, setReversed] = useState(reverse? reverse:false);

    const handleClick = (data: any) => {
        if (sorted && reversed) {
            setData(dataSort(data).reverse());
            setReversed(false);
            return;
        }
        if (sorted && !reversed) {
            setData(dataSort(data));
            setReversed(true);
            return;
        }
    };

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
