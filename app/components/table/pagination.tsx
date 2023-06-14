'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { classNamesInterface, TableInterface } from '../../types/index'
import { CloseButton, RowLabel, Button } from '../index';
import { dataSort, arrow } from './utils';
import styles from './index.module.scss';

interface Props extends classNamesInterface, TableInterface {
    isPaginated: boolean;
    setIsPaginated: React.Dispatch<React.SetStateAction<boolean>>;
};

interface PaginateInterface {
    currentPage: number;
    data: any;
    rows: number;
}

const dataPaginate = ({ currentPage, data, rows }: PaginateInterface) => {
    const startIndex = (currentPage - 1) * rows;
    const endIndex = startIndex + rows;
    return [...data].slice(startIndex, endIndex);
};

const Index = ({ className, dataTable, rows, reverse, isPaginated, setIsPaginated }: Props) => {

    const TOTAL_ROWS = dataTable?.length;

    const [isSorted, setIsSorted] = useState(false);
    const [isReversed, setIsReversed] = useState(reverse ? reverse : false);
    const [renderData, setRenderData] = useState(() => dataSort([...dataTable]));
    const [currentPage, setCurrentPage] = useState(1);
    const [currentRows, setCurrentRows] = useState(rows ? rows : 5);
    const [renderPaginatedData, setRenderPaginatedData] = useState(dataPaginate({ currentPage, data: renderData, rows: currentRows }));
    const [totalPages, setTotalPages] = useState(renderPaginatedData ? Math.ceil(TOTAL_ROWS / currentRows) : Math.ceil(TOTAL_ROWS / 5));

    useEffect(() => {
        if (isReversed) {
            const newData = renderData.reverse();
            setRenderData(newData);
            setIsReversed(!isReversed);
        }
    }, [isReversed, currentRows, renderPaginatedData, renderData]);

    const idSortHandler = (data: any) => {
        const tempData = dataSort([...data]);
        setIsSorted(!isSorted);
        if (!isSorted) return setRenderPaginatedData(tempData.reverse());
        if (isSorted) return setRenderPaginatedData(tempData);
    };

    const loadMoreData = () => {
        if (currentPage == totalPages) return;
        const nextPage = currentPage + 1;
        const newData = dataPaginate({ currentPage: nextPage, data: renderData, rows: currentRows });
        setCurrentPage(nextPage);
        setRenderPaginatedData(() => [...newData]);
    }

    const loadLessData = () => {
        if (currentPage == 1) return;
        const nextPage = currentPage - 1;
        const newData = dataPaginate({ currentPage: nextPage, data: renderData, rows: currentRows });
        setCurrentPage(nextPage);
        setRenderPaginatedData(() => [...newData]);
    }

    const rowsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const userRows = parseInt(e.target.value);
        const isNumber = /^\d+$/.test(userRows);

        if (!isNumber) {
            setCurrentRows(5);
            setTotalPages(Math.ceil(dataTable?.length / 5));
            const newData = dataPaginate({ currentPage, data: renderData, rows: 5 });
            setRenderPaginatedData([...newData]);
        } else if (userRows <= 0) {
            setCurrentRows(5);
            setTotalPages(Math.ceil(dataTable?.length / 5));
            const newData = dataPaginate({ currentPage, data: renderData, rows: 5 });
            setRenderPaginatedData([...newData]);
        } else {
            setCurrentRows(userRows);
            setTotalPages(Math.ceil(dataTable?.length / userRows));
            const newData = dataPaginate({ currentPage, data: renderData, rows: currentRows });
            setRenderPaginatedData([...newData]);
        }
    };


    const reverseHandler = () => {
        setIsReversed(!isReversed);
        const newData = [...renderData].sort().reverse();
        setRenderPaginatedData(dataPaginate({ currentPage, data: newData, rows: currentRows }));
    };

    return (
        <>
            <section className={styles.paginateContainer}>
                <RowLabel name={'reverse'} type={'checkbox'} onChange={() => reverseHandler()} >
                    invertir  info
                </RowLabel>

                <input type="number" onBlur={(e) => rowsHandler(e)} onChange={(e) => rowsHandler(e)} placeholder={`${currentRows}`} />
                <span>
                    <Button onClick={() => { loadLessData() }}>
                        <Image src={arrow} alt="nextjs" width={32} height={32} />
                    </Button>
                    <Button onClick={() => loadMoreData()} >
                    <Image src={arrow} alt="nextjs" width={32} height={32} />
                </Button>
            </span>
        </section >
            <table className={className} >
                <thead>
                    <tr>
                        <th onClick={() => idSortHandler([...renderPaginatedData])}>ID</th>
                        <th>Tarea</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
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
        </>

    );
};

export default Index;
