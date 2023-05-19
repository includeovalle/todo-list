import { Children } from '../children/index'
import { ClassName } from '../className/index'

export interface buttonProps {
    className?: ClassName;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children?: Children;
}
