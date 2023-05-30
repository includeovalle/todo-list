"use client"

import React from 'react';
import { Htag, Container, Form, ColLabel, Table } from '../../index';
import { Modal } from '../index';
import { TableInterface } from "../../../types/index";


const Tasks = ({ dataTable }: TableInterface) => {


    const SubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };
    return (
        <Container>
            <Htag type={3} className={'center'} > Simple todo list</Htag >


            <Modal className={'task'} display={"agregar nueva tarea +"}>
                <Form buttonText={'agregar'} onSubmit={e => SubmitHandler(e)}>
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
