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

// SubmitHandler function
const SubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();

  const formData = formRef.current ? new FormData(formRef.current) : null; // Add null check
  if (!formData) return; // Stop further execution if formData is null

  const data = Object.fromEntries(formData);
  data.completed = "false";
  const stringData = JSON.stringify(data);

        const response = await fetch('http://localhost:3000/api/task/POST', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringData
        });
        console.log('response', response);
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
