import { Option } from "./option";

export type Question = {
    id: number;
    question: string;
    options:Option[];
}