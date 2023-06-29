'use client'
import React, { useState } from 'react';
import { classNamesInterface, TableInterface } from '../../types/index'
import { dataSort } from './utils';
import { CloseButton, RowLabel } from '../index';

interface Props extends classNamesInterface, TableInterface {
}

const Index = ({ className, dataTable }: Props) => {
    const [data, setData] = useState(dataSort(dataTable));
    const [isCompleted, setIsCompleted] = useState(1);

    const [reversed, setReversed] = useState(false);

    const idSorter = (data: any) => {
        const tempData = dataSort([...data]);
        setReversed(!reversed);
        if (!reversed) return setData(tempData.reverse());
        if (reversed) return setData(tempData);
    }

    async function DeleteHandler(e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) {
        const target = e.target as HTMLElement;
        const id = target.previousSibling?.previousSibling?.previousSibling?.textContent;
        console.log(id);
    };

    async function UpdateStatusHandler(e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) {
        const target = e.target as HTMLElement;
        let currentRow = target.textContent;

        const currentState = currentRow === 'completed' ? true : false;
        const reverseState = !currentState;
        const id = target.previousSibling?.previousSibling?.textContent;

        const data = { id, completed: reverseState }
        const stringData = JSON.stringify(data);

        const FetchData = await fetch(`task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringData
        })
        const response = await FetchData.json();
        if (response.status === 200) {
            window.location.reload();
        }
    };

    async function UpdateTaskHandler(e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) {
        const target = e.target as HTMLElement;
        const id = target.previousSibling?.textContent;
        console.log(id);

    };
    return (
        <>
            <table className={className}>
                <thead>
                    <tr>
                        <th onClick={() => idSorter(dataTable)}>ID</th>
                        <th>Tarea</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {//TODO: ADD UPDATE  AND DELETE BUTTONS
                        data?.map((datas: any) => {
                            const { id, task, completed } = datas;
                            return (
                                < tr key={id} >
                                    <td>{id}</td>
                                    <td onDoubleClick={e => UpdateTaskHandler(e)}>{task}</td>
                                    <td onDoubleClick={e => UpdateStatusHandler(e)}>{completed ? 'completed' : 'not completed'}
                                    </td>
                                    <td onClick={e => DeleteHandler(e)} >
                                        {<CloseButton className={'pointerTask'} />}
                                    </td>
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
