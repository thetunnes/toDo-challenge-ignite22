import { ChangeEvent } from "react";
import { Check, Trash } from "phosphor-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { ToDoProps } from "../App";

interface Props {
  toDo: ToDoProps,
  finish: boolean,
  handleFinishTodo: (toDo: string, isChecked: boolean) => void,
  handleDeleteThisTask: (toDo: string) => void
}

export function FieldTodo({toDo, finish, handleFinishTodo, handleDeleteThisTask }: Props) {

  function wantFinishTodo(isChecked: boolean) {
    handleFinishTodo(toDo.id, isChecked)
  }

  return (
    <li className="flex items-center justify-between gap-3 rounded bg-gray-500 p-4 text-gray-100">
      <label htmlFor={toDo.toDo}>
        <CheckboxPrimitive.Root name={toDo.toDo} onCheckedChange={wantFinishTodo} className={`flex justify-center items-center w-4 h-4 rounded-full border-2 border-blue `}>
          <CheckboxPrimitive.Indicator className="bg-purple-dark rounded-full">
          <Check size={16} color="#F2F2F2" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </label>
      <span
        className={`flex-1 text-md ${
          finish ? "line-through text-gray-400" : null
        }`}
      >
        {toDo.toDo}
      </span>
      <Trash
        onClick={() => handleDeleteThisTask(toDo.id)}
        size={20}
        className="text-gray-300 transition-colors hover:text-danger cursor-pointer "
      />
    </li>
  );
}
