import { Children } from '../children/index'
import { ClassName } from '../className/index'

export interface Props {
    closeBtn: React.ReactNode;
    onClick: () => void;
    className?: ClassName;
    children?: Children;
}
