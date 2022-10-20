import { FormEvent, useEffect, useState } from 'react';
import { v4 as uuid } from "uuid"
import { Input } from "./Input"
import { useListTodo } from '../contexts/listTodo';
import Plus from "../assets/plus.svg"



export function NewTodo() {

  const { contextList, setContextList } = useListTodo()

  function handleAddNewTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const target = e.target as HTMLFormElement

    const newTodo = {
      id: uuid(),
      toDo: target.newTodo.value,
      created_at: new Date(),
      isChecked: false,
    }

    setContextList([...contextList, newTodo])

    target.reset()
  }

  return (
    <form onSubmit={handleAddNewTodo} className="w-full flex items-center text-md px-1 gap-2 relative top-[-88px] sm:text-sm">
      <Input name="newTodo" placeholder="Adicione uma nova tarefa" />
      <button type='submit' className="flex items-center gap-2 bg-blue-dark text-gray-100 p-4 rounded-lg transition-colors hover:bg-blue sm:text-sm">Criar <img src={Plus} /></button>
    </form>
  )
}