"use client"

import React, { useState } from 'react';
import { Htag, Container, Form, ColLabel, Table } from '../../index';
import { Modal } from '../index';
import { TableInterface } from "../../../types/index";

interface task {
    task: string;
    completed: boolean;
}

const Tasks = ({ dataTable }: TableInterface) => {

    const [dataTask, setDataTask ] = useState({});
    const formRef = React.createRef<HTMLFormElement>();

    const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <Container>
            <Htag type={3} className={'center'} > Simple todo list</Htag >


            <Modal className={'task'} display={"agregar nueva tarea +"}>
                <Form ref={formRef} buttonText={'agregar'} onSubmit={e => SubmitHandler(e)}>
                    <ColLabel name={'task'} type={'text'} placeholder={'enter new task'}>
                        enter task
                    </ColLabel>
                </Form>
            </Modal>

            <Table className="tasks" dataTable={dataTable} />

        </Container>
    );
};

export default Tasks;
