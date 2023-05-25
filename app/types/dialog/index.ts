import { childrenInterface, classNamesInterface } from '../index'

export default interface Props extends childrenInterface, classNamesInterface {
    closeBtn?: React.ReactNode;
    onClick: () => void;
}
