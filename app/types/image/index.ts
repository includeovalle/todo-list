import { childrenInterface, classNamesInterface} from '../index'

export default interface Props extends childrenInterface, classNamesInterface {
    src: string
    alt: string
}
