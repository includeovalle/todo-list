'use client'
import React, { useRef } from 'react';
import { Button, Ul, Dialog } from '../index';
import { ListInterface } from "../../types/index";

export const Spans = () => {
    return (
            <>
            <span></span>
            <span></span>
            </>
           )}

const Index = ({ lis }: ListInterface) => {

    const modalRef = useRef<HTMLDialogElement>(null);

    const hamburgerHandler = () => {
        modalRef.current?.showModal();
    };

    const closeModal = () => {
        modalRef.current?.close();
    };

    return (
        <>
            <Button className={'hamburger'} type={'button'} onClick={() => hamburgerHandler()}>
                <span></span>
                <span></span>
                <span></span>
            </Button>

            <Dialog ref={modalRef} closeBtn={<Spans/>} onClick={() => closeModal()}>
                <Ul onClick={() => closeModal()} className={'mobileNav'} lis={lis} />
            </Dialog>
        </>
    );
};

export default Index;

