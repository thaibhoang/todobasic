import { Dispatch, SetStateAction } from "react";

export type TodoType = {
  id: number;
  title: string;
  detail: string;
  finished: boolean;
};

export interface FinishContextType {
  finishedTodo: TodoType[];
  unfinishedTodo: TodoType[];
  setFinishedTodo: Dispatch<SetStateAction<TodoType[]>>;
  setUnfinishedTodo: Dispatch<SetStateAction<TodoType[]>>;
}
