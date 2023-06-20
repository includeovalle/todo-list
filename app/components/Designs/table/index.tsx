"use client"

import React from 'react';
//import router from 'next/router';
import { useRouter } from 'next/navigation';
import { Htag, Container, Form, ColLabel, Table } from '../../index';
import { Modal } from '../index';
import { TableInterface } from "../../../types/index";

interface PropsInterface extends TableInterface { }

const Tasks = ({ dataTable, pagination, rows, reverse }: PropsInterface) => {

    const formRef = React.createRef<HTMLFormElement>();
    const router = useRouter();

    // SubmitHandler function
    const SubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = formRef.current ? new FormData(formRef.current) : null;
        if (!formData) return;

        const data = Object.fromEntries(formData);
        data.completed = "false";
        const stringData = JSON.stringify(data);

        const response = await fetch('api/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringData
        });

        if (response.ok) {
            router.push('/');
        } else {
            console.error('Error occurred during the POST request');
        }
    };

    // Rest of your code

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

            <Table className="tasks"
                dataTable={dataTable}
                pagination={pagination}
                rows={rows}
                reverse={reverse}
            />

        </Container>
    );
};

export default Tasks;
