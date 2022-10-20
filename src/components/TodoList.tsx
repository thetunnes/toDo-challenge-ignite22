import { useCallback, useEffect, useMemo, useState } from "react";
import { FieldTodo } from "./FieldTodo";
import { ToDoProps } from "../App";
import { useListTodo } from "../contexts/listTodo";

interface Props {
  list: ToDoProps[];
  onDelete: (idToDo: string) => void;
  completedTodo: (idToDo: string, isChecked: boolean) => void;
  countCompletedToDos: number;
}

export function TodoList({ list, onDelete, completedTodo, countCompletedToDos }: Props) {

  const { contextList } = useListTodo()

  function handleFinishTodo(idToDo: string, isChecked: boolean) {
    completedTodo(idToDo, isChecked)
  }

  function handleDeleteThisTask(idToDo: string) {
    onDelete(idToDo)
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between py-6 sm:flex-col sm:gap-4">
        <div className="flex items-center gap-2 sm:self-start">
        <strong className="text-blue">Tarefas criadas</strong>
        <span className="bg-gray-500 px-2 py-[2px] text-gray-200 rounded-full text-sm">{contextList.length}</span>
        </div>
        <div className="flex items-center gap-2 sm:self-end">
        <strong className="text-purple-light">Concluídas</strong>
        <span className="bg-gray-500 px-2 py-[2px] text-gray-200 rounded-full text-sm">{`${countCompletedToDos} de ${contextList.length}`}</span>
        </div>
      </div>

      {contextList.length ? (
        <ul className="flex flex-col items-stretch gap-3">
          {contextList.map((toDo) => (
            <FieldTodo key={toDo.id} toDo={toDo} finish={toDo.isChecked} handleFinishTodo={handleFinishTodo} handleDeleteThisTask={handleDeleteThisTask} />
          ))}
        </ul>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-6 border-t-2 border-gray-400">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="my-2"
          >
            <rect width="56" height="56" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_43_191" transform="scale(0.01)" />
              </pattern>
              <image
                id="image0_43_191"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <span className="text-gray-300 text-center">Você ainda não tem tarefas cadastradas</span>
          <span className="text-gray-400 text-center">Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
      {countCompletedToDos !== 0 && countCompletedToDos === contextList.length ? (
        <p className="w-full text-blue-dark text-center py-4 font-semibold">Todos os à fazeres foram concluídos.</p>
      ): null}
    </section>
  );
}
