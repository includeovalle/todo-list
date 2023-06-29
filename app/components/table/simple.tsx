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

        const FetchData = await fetch(`task/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        const response = await FetchData.json();
        if (response.status === 200) {
            window.location.reload();
        }
    };

    async function UpdateStatusHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;
        const id = target.parentNode?.parentNode?.previousSibling?.previousSibling?.textContent;
        const currentValue = parseInt(target.value);
        const currentState = currentValue == 2 ? true : false;
        const data = { id, completed: currentState }
        const stringifiedData = JSON.stringify(data);
        console.log(stringifiedData);
        const FetchData = await fetch(`task/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringifiedData
        })

        const response = await FetchData.json();
        if (response.status === 200) {
            window.location.reload();
        }
    };

    async function UpdateTaskHandler(e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) {
        const target = e.target as HTMLElement;
        const id = target.previousSibling?.textContent;



    };
    return (
        <>
            <table className={className}>
                <thead>
                    <tr>
                        <th onClick={() => idSorter(dataTable)}>ID</th>
                        <th>Tarea</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {//TODO: ADD UPDATE  AND DELETE BUTTONS
                        data?.map((datas: any) => {
                            const { id, task, completed } = datas;

                            const status = completed ? 'completed' : 'not completed';

                            return (
                                < tr key={id} >
                                    <td>{id}</td>
                                    <td onDoubleClick={e => UpdateTaskHandler(e)}>{task}</td>

                                    <td >
                                        <RowLabel className={'rangeButton'}
                                            onChange={e => UpdateStatusHandler(e)}
                                            name="completed"
                                            type='range'
                                            min={1} max={2}
                                            value={status === 'completed' ? 2 : 1}>
                                            <div>no Ω</div>
                                            <div> yes </div>
                                        </RowLabel>
                                    </td>
                                    <td  onClick={e => DeleteHandler(e)} style={{cursor:"pointer", paddingLeft:"1%",}} >

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
