import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

interface Props {
  src: string;
  alt: string;
  width?: number;
  swap?: boolean;
  swapImage?: string;
  figcaption?: boolean;
  text?: string;
  className?: string;
  links?: boolean;
  href?: string;
}

const Index = ({ src, alt, links, href, width, swap, swapImage, figcaption, text, className }: Props) => {
  const propStyle = className ? styles[className] : styles['default'];

  const [currentSrc, setCurrentSrc] = useState(src);

  const handleSwap = () => {
    setCurrentSrc(swap ? swapImage || src : src);
  };

  return (
    <figure className={propStyle}>
      {links && width && (
        <Link href={href || ''}>
          <Image
            src={currentSrc}
            alt={alt}
            width={width}
            priority
            onClick={handleSwap}
          />
        </Link>
      )}
      {links && !width && (
        <Link href={href || ''}>
          <Image
            src={currentSrc}
            alt={alt}
            sizes="(max-width: 600px) 100vw, 600px"
            priority
            onClick={handleSwap}
          />
        </Link>
      )}
      {!links && width && (
        <Image
          src={currentSrc}
          alt={alt}
          width={width}
          priority
          onClick={handleSwap}
        />
      )}
      {!links && !width && (
        <Image
          src={currentSrc}
          alt={alt}
          sizes="(max-width: 600px) 100vw, 600px"
          priority
          onClick={handleSwap}
        />
      )}
      {figcaption && <figcaption>{text}</figcaption>}
    </figure>
  );
};

export default Index;
