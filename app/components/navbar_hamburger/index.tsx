import { Ul, Hamburger } from '../index'
import React from 'react';

interface Props {
    nav: string[];
    mobileNav: string[];
}

const Index = ({ nav, mobileNav }:Props) => {
    return (
        <>

            <nav>
                <Ul className="nav" lis={nav} />
            </nav>

            <Hamburger lis={mobileNav} />
        </>
    );
};

export default Index;
