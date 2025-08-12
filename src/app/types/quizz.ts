import { Question } from "./question";

export type Quizz = {
   id: number;
   title: string;
   questions: Question[];
   results: {};
}
