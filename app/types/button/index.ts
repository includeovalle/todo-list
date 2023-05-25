import { childrenInterface, classNamesInterface } from '../index'

export default interface Props extends childrenInterface, classNamesInterface {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}
