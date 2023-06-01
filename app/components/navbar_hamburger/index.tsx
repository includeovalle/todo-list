import { Ul, Hamburger } from '../index'
import { UlInterface } from "@/app/types/index";
import React from 'react';


const Index = ({ lis, otherLis}:UlInterface) => {
    return (
        <>

            <nav>
                <Ul className="nav" lis={lis} />
            </nav>

            <Hamburger lis={otherLis} />
        </>
    );
};

export default Index;
