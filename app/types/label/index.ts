import { childrenInterface, classNamesInterface} from '../index'

export default interface Props extends childrenInterface, classNamesInterface {
    type: "submit" | "text" | "password" | "email" | "number" | "search" | "checkbox" | "radio" | "file" | "date" | "datetime-local" | "hidden" | "image" | "month" | "range" | "reset" | "tel" | "time" | "url" | "week";
    name: string;
    placeholder?: string;
}
