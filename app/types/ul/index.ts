import { classNamesInterface, ListInterface } from '../index'

export default interface Props extends classNamesInterface, ListInterface {
    onClick?: () => void;
    links?: boolean;
}
