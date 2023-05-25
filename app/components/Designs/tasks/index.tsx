"use client"

import React, { useRef } from 'react';
import { Htag, Button, Container, Dialog, Form, ColLabel, RowLabel, Table } from '../../index';
import {TableInterface } from "../../../types/index";


const Tasks = ({ dataTable }: TableInterface) => {
    
    console.log(Array.isArray(dataTable))
    const modalRef = useRef<HTMLDialogElement>(null);
    const modalHandlerOpen = () => {
        modalRef.current?.showModal();
    };

    const modalHandlerClose = () => {
        modalRef.current?.close();
    };

    return (
        <Container>
            <Htag type={3} className={'center'} > tasks broo</Htag >
            <Button className={'addTask'} onClick={() => modalHandlerOpen()}>
                add task +
            </Button>

            <Dialog className={'modal'} ref={modalRef}  onClick={() => modalHandlerClose()}>
                <Form buttonText={'enviar'}>
                    <ColLabel type={'text'} placeholder={'enter new task'}>
                        task
                    </ColLabel>
                    <RowLabel type={'password'} placeholder={'enter new row'}>
                        enter task
                    </RowLabel>
                </Form>
            </Dialog>

            <Table dataTable={dataTable} />
            



        </Container>
    );
};

export default Tasks;
