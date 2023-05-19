import { ClassName } from '../className/index'
import { Children } from '../children/index'

export interface Index {
    className?: ClassName;
    children?: Children;
    type: 1 | 2 | 3 | 4;
}
