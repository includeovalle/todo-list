import { childrenInterface, classNamesInterface} from '../index'

export default interface Props extends childrenInterface, classNamesInterface {
    type: "submit" | "text" | "password" | "email" | "number" | "search" | "checkbox" | "radio" | "file" | "date" | "datetime-local" | "hidden" | "image" | "month" | "range" | "reset" | "tel" | "time" | "url" | "week";
    name: string;
    min?: number;
    max?: number;
    //value might be a num or string
    value?: string | number;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e?: React.MouseEvent<HTMLLabelElement>) => void;
}
