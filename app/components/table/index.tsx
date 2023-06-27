'use client'

import SimpleTable from './simple';
import { RowLabel } from '@/app/components';
import PaginationTable from './pagination';
import { SHOW_MORE } from './utils';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { classNamesInterface, TableInterface } from '../../types/index'

interface Props extends classNamesInterface, TableInterface { };



const Index = ({ className, dataTable, pagination, rows, reverse }: Props) => {


    const classProps = className ? styles[className] : styles['default'];

    const [isPaginated, setIsPaginated] = useState(true);

    return (
        <>
            <RowLabel className={'insetPadding'} name={'reverse'} type={'checkbox'} onChange={(e) => setIsPaginated(!isPaginated)} >
                {SHOW_MORE}
            </RowLabel>
            {
                isPaginated &&
                <PaginationTable
                    className={classProps}
                    dataTable={dataTable}
                    rows={rows}
                    reverse={reverse}
                />

            }
            {
                !isPaginated &&
                <>
                    <SimpleTable
                        className={classProps}
                        dataTable={dataTable}
                        pagination={isPaginated}
                        rows={rows}
                        reverse={reverse}
                    />
                </>
            }
        </>
    );
};

export default Index;
