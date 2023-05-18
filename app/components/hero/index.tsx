import Image from 'next/image'
import React from 'react';
import styles from "./index.module.scss";
import { Container } from '../index';

interface Props {
    src: string;
    alt: string;
    children?: React.ReactNode;
}
const Hero = ({ src, alt, children }: Props) => {
    return (
        <>
            <Container>
                <figure className={styles.default}>
                    <Image
                        src={src}
                        alt={alt}
                        sizes="(max-width: 639px) 100vw, (max-width: 1007px) 728px, 970px"
                        priority
                        fill
                    />
                    <figcaption>
                        {children}
                    </figcaption>
                </figure>
            </Container>
        </>
    );
};

export default Hero;
