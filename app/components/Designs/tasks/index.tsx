"use client"

import React, { useRef } from 'react';
import { Htag, Button, Container, Dialog, Form, ColLabel, Table } from '../../index';
import {TableInterface } from "../../../types/index";


const Tasks = ({ dataTable }: TableInterface) => {
    
    const modalRef = useRef<HTMLDialogElement>(null);
    const modalHandlerOpen = () => {
        modalRef.current?.showModal();
    };

    const modalHandlerClose = () => {
        modalRef.current?.close();
    };

    const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log('submit');
    };
    return (
        <Container>
            <Htag type={3} className={'center'} > Simple todo list</Htag >
            <Button className={'addTask'} onClick={() => modalHandlerOpen()}>
                add task +
            </Button>

            <Dialog className={'modal'} ref={modalRef}  onClick={() => modalHandlerClose()}>
                <Form buttonText={'agregar'} onSubmit={e => SubmitHandler(e)}>
                    <ColLabel type={'text'} placeholder={'enter new task'}>
                        enter task
                    </ColLabel>
                </Form>
            </Dialog>

            <Table className="tasks" dataTable={dataTable} />

        </Container>
    );
};

export default Tasks;
