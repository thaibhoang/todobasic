"use client";

import { useState } from "react";
import Todo from "../todo/page";
import { FinishContext } from "./FinishContext";
import { TodoType } from "@/app/types/listTypes";

const todoData: TodoType[] = [
  { id: 1, finished: false, title: "task1", detail: "task1 detail" },
  { id: 2, finished: false, title: "task2", detail: "task2 detail" },
  { id: 3, finished: true, title: "task3", detail: "task3 detail" },
  { id: 4, finished: true, title: "task4", detail: "task4 detail" },
];
const finishedData = todoData.filter((todo) => todo.finished);
const unfinishedData = todoData.filter((todo) => !todo.finished);

const UnfinishedList = () => {
  const [finishedTodo, setFinishedTodo] = useState(finishedData);
  const [unfinishedTodo, setUnfinishedTodo] = useState(unfinishedData);

  return (
    <FinishContext.Provider
      value={{
        finishedTodo,
        unfinishedTodo,
        setFinishedTodo,
        setUnfinishedTodo,
      }}
    >
      <div>
        Finished Tasks:
        {finishedTodo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <hr></hr>
      <div>
        Unfinished Tasks:
        {unfinishedTodo.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </FinishContext.Provider>
  );
};

export default UnfinishedList;
