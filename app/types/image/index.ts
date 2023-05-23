import { Children } from '../children/index'
import { ClassName } from '../className/index'

export interface buttonProps extends Children, ClassName {
    src: string
    alt: string
}
