import { FormEvent, useEffect, useState } from 'react';
import { Input } from "./Input"
import Plus from "../assets/plus.svg"


interface Props {
  addTodo: (todo: string) => void;
}
export function NewTodo({ addTodo }: Props) {

  function handleAddNewTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    addTodo(e.target.newTodo.value)

    e.target.reset()
  }
  return (
    <form onSubmit={handleAddNewTodo} className="w-full flex items-center px-3 gap-2 absolute top-[-32px]">
      <Input name="newTodo" placeholder="Adicione uma nova tarefa" />
      <button type='submit' className="flex items-center gap-2 bg-blue-dark text-gray-100 p-4 rounded-lg transition-colors hover:bg-blue">Criar <img src={Plus} /></button>
    </form>
  )
}