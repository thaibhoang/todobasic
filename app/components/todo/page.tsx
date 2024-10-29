"use client";

import { TodoType } from "@/app/types/listTypes";
import { useContext } from "react";
import { FinishContext } from "../unfinishedList/FinishContext";

interface TodoProps {
  todo: TodoType;
}

const Todo = ({ todo }: TodoProps) => {
  const context = useContext(FinishContext);

  if (!context) {
    throw new Error("Todo must be used within a FinishContext.Provider");
  }

  const { finishedTodo, unfinishedTodo, setFinishedTodo, setUnfinishedTodo } =
    context;

  const handleChangeStatus = () => {
    if (todo.finished) {
      setFinishedTodo(
        finishedTodo.filter((todoL: TodoType) => todoL.id !== todo.id)
      );
      setUnfinishedTodo([...unfinishedTodo, { ...todo, finished: false }]);
    } else {
      setFinishedTodo([...finishedTodo, { ...todo, finished: true }]);
      setUnfinishedTodo(
        unfinishedTodo.filter((todoL: TodoType) => todoL.id !== todo.id)
      );
    }
  };
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.detail}</div>
      <div>Is finished?: {`${todo.finished}`}</div>
      <button onClick={handleChangeStatus}>
        Chage to {todo.finished ? "unfinished" : "finish"}
      </button>
    </>
  );
};

export default Todo;
