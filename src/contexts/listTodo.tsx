import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { ToDoProps } from "../App";

interface PropsContext {
  contextList: ToDoProps[];
  setContextList: Dispatch<SetStateAction<ToDoProps[]>>
}

const ListTodo = createContext({} as PropsContext)

interface Props {
  children?: ReactNode
}

export function ListTodoProvider({ children }: Props) {
  const [contextList, setContextList] = useState<ToDoProps[]>([])

  return (
    <ListTodo.Provider value={{contextList, setContextList}}>
      {children}
    </ListTodo.Provider>
  )
}

export const useListTodo = () => useContext(ListTodo)