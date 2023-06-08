'use client'
import React, { useState } from 'react';
import { classNamesInterface, TableInterface } from '../../types/index'
import { CloseButton } from '../index';

interface Props extends classNamesInterface, TableInterface { };

const dataSort = (data: any) => {
    return data?.sort((a: any, b: any) => a.id - b.id)
};

interface PaginateInterface {
    currentPage: number;
    data: any;
    rows: number;
}


const Index = ({ dataTable, rows, sort, reverse }: Props) => {

    const dataPaginate = ({ currentPage, data:dataPaginated, rows }: PaginateInterface) => {
        const startIndex = (currentPage - 1) * rows;
        const endIndex = startIndex + rows;
        return dataPaginated.slice(startIndex, endIndex);
    };

    const [isSorted, setIsSorted] = useState(sort);
    const [renderData, setRenderData] = useState(isSorted ? dataSort(dataTable) : dataTable);
    const [isPaginated, setIsPaginated] = useState(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentRows, setCurrentRows] = useState(rows ? rows : 5);
    const [renderPaginatedData, setRenderPaginatedData] = useState(dataPaginate({ currentPage, data: renderData, rows }));

    const totalPages = Math.ceil(dataTable.length / currentRows);
    const idSortHandler = (data: any) => {
        setRenderData(!isSorted ? dataSort(data) : dataSort(data).reverse());
        setIsSorted(!isSorted);
    };

    const loadMoreData = () => {
        const nextPage = currentPage + 1;
        const newData = dataPaginate({ currentPage: nextPage, data: renderData, rows });
        setCurrentPage(nextPage);
        setRenderPaginatedData(() => [...newData]);
    }

    const loadLessData = () => {
        const nextPage = currentPage - 1;
        const newData = dataPaginate({ currentPage: nextPage, data: renderData, rows });
        setCurrentPage(nextPage);
        setRenderPaginatedData(() => [...newData]);
    }



    const rowsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const userRows = parseInt(e.target.value);
        setCurrentRows(userRows);
        const newData = dataPaginate({ currentPage, data: renderData, rows: currentRows });
        setRenderPaginatedData(() => [...newData]);
    }

    //const dataPaginated = dataPaginate(dataTable);
    //sort data by id
    //const sortedData = sort ? dataSort(dataTable) : null;
    //const sortedPaginatedData = sort ? dataPaginate(dataSort(dataTable)) : null;
    //reverse data
    //const reverseData = reverse ? sortedData?.reverse() : null;
    //const reversePaginatedData = reverse ? sortedPaginatedData?.reverse() : null;


    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th onClick={() => idSortHandler(renderData)}>ID</th>
                        <th>Tarea</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isPaginated &&
                        renderData?.map((datas: any) => {
                            return (
                                < tr key={datas.id} >
                                    <td>{datas.id}</td>
                                    <td>{datas.task}</td>
                                    <td>{datas.completed ? 'completed' : 'not completed'}</td>
                                    <td>{<CloseButton />}</td>
                                </tr>
                            )
                        })
                    }
                    {
                        isPaginated &&
                        renderPaginatedData?.map((datas: any) => {
                            return (
                                < tr key={datas.id} >
                                    <td>{datas.id}</td>
                                    <td>{datas.task}</td>
                                    <td>{datas.completed ? 'completed' : 'not completed'}</td>
                                    <td>{<CloseButton />}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >
            {
                isPaginated &&
                <div >
                    <button onClick={() => setIsPaginated(!isPaginated)}>paginate</button>
                    <button>reverse</button>
                    <input type="number" placeholder={currentRows} />
                    {
                        currentPage > 1 &&
                        <button onClick={() => { loadLessData() }}>-</button>
                    }
                    {
                        currentPage < totalPages &&
                        <button onClick={() => loadMoreData()} >+</button>
                    }
                </div>

            }
            {
                !isPaginated &&
                <button onClick={() => setIsPaginated(!isPaginated)}>paginate</button>

            }
        </>

    );
};

export default Index;
