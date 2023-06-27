import { childrenInterface, classNamesInterface } from '../index'

export default interface Props extends childrenInterface, classNamesInterface {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
