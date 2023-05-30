'use client'
import React, { useRef } from 'react';
import { Button, Ul, Dialog } from '../index';
import { UlInterface } from "app/types/";


const Index = ({ otherLis }: UlInterface ) => {;

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

            <Dialog ref={modalRef} onClick={() => closeModal()}>
            <Ul onClick={() => closeModal()} className={'mobileNav'} otherLis={otherLis} />
            </Dialog>
        </>
    );
};

export default Index;

