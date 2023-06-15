'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { classNamesInterface, TableInterface } from '../../types/index'
import { CloseButton, ColLabel, RowLabel, Button, CustomImage } from '../index';
import { dataSort, arrow, SHOW_RECENT, SHOW_COLUMNS } from './utils';
import styles from './index.module.scss';

interface Props extends classNamesInterface, TableInterface { };

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


const Index = ({ className, dataTable, rows, reverse }: Props) => {

    const TOTAL_ROWS = dataTable?.length ?? 0;


    const [isSorted, setIsSorted] = useState(false);
    const [isReversed, setIsReversed] = useState(reverse ? reverse : false);
    const [renderData, setRenderData] = useState(() => dataSort(dataTable));
    const [currentPage, setCurrentPage] = useState(1);
    const [currentRows, setCurrentRows] = useState(rows ? rows : 10);
    const [renderPaginatedData, setRenderPaginatedData] = useState(dataPaginate({ currentPage, data: renderData, rows: currentRows }));
    const [totalPages, setTotalPages] = useState(renderPaginatedData ? Math.ceil(TOTAL_ROWS / currentRows) : Math.ceil(TOTAL_ROWS / 10));

    useEffect(() => {
        console.log('called');
        const newData = dataPaginate({ currentPage, data: renderData, rows: currentRows });
        setRenderPaginatedData([...newData]);
    }, [isReversed, currentRows, renderData, currentPage]);


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


    const rowsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userRows = e.target.value;
        const rowsCount = Number(userRows);
        const isNumber = /^\d+$/.test(userRows);
        if (!isNumber) {
            setCurrentRows(5);

            if (dataTable) {
                setTotalPages(Math.ceil(dataTable.length / 5));

            }
            const newData = dataPaginate({ currentPage, data: renderData, rows: 5 });
            setRenderPaginatedData([...newData]);
        } else if (rowsCount <= 0) {
            setCurrentRows(5);

            if (dataTable) {
                setTotalPages(Math.ceil(dataTable.length / 5));

            }
            const newData = dataPaginate({ currentPage, data: renderData, rows: 5 });
            setRenderPaginatedData([...newData]);
        } else {
            setCurrentRows(rowsCount);

            if (dataTable) {
                setTotalPages(Math.ceil(dataTable.length / 5));
            }
            const newData = dataPaginate({ currentPage, data: renderData, rows: currentRows });
            setRenderPaginatedData([...newData]);
        }
    };


    const reverseHandler = () => {
        setIsReversed(!isReversed);
        const newData = [...renderData].sort().reverse();
        if (isReversed) {
            const newData = renderData.reverse();
            setRenderData(newData);
        } else {
            setRenderData([...newData]);
        }
    };

    return (
        <>
            <section className={styles.paginateContainer}>
                <RowLabel name={'reverse'} type={'checkbox'} onChange={() => reverseHandler()} >

                    {SHOW_RECENT}
                </RowLabel>
                <span>
                    <Button className={'icon'} onClick={() => { loadLessData() }}>
                        <CustomImage src={arrow} className={'icon'} alt={'left arrow'}/>
                    </Button>
                    <Button className={'icon'} onClick={() => loadMoreData()} >
                        <CustomImage src={arrow} className={'icon'} alt={'right arrow'}/>
                    </Button>
                </span>
                <ColLabel name={'userRows'} type={'number'} onChange={(e) => rowsHandler(e)} placeholder={`${currentRows}`} >
                    {SHOW_COLUMNS}

                </ColLabel>
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
