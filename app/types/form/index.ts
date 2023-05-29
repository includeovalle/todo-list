import { childrenInterface, classNamesInterface } from '../index'
//onSubmit: () => void; takes an event and returns nothing
export default interface Props extends childrenInterface, classNamesInterface {
    buttonText: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
