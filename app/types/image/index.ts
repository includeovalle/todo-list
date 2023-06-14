import { childrenInterface, classNamesInterface} from '../index'
import { StaticImageData } from 'next/image';

export default interface Props extends childrenInterface, classNamesInterface {
    src: string | StaticImageData
    alt: string
}
