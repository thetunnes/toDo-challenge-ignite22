import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface PropsContext {
  contextList: string[];
  setContextList: Dispatch<SetStateAction<string[]>>
}

const ListTodo = createContext({} as PropsContext)

interface Props {
  children?: ReactNode
}

export function ListTodoProvider({ children }: Props) {
  const [contextList, setContextList] = useState<string[]>([])

  console.log(contextList)
  return (
    <ListTodo.Provider value={{contextList, setContextList}}>
      {children}
    </ListTodo.Provider>
  )
}

export const useListTodo = () => useContext(ListTodo)