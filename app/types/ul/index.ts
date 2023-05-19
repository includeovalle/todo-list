import { ClassName } from '../className/index';
import {list} from './list';

export interface Props {
    className?: ClassName;
    onClick?: () => void;
    links?: boolean;
    lis?: list;
}
