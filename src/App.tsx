import { useCallback, useEffect, useState } from "react"
import { Header } from "./components/Header"
import { NewTodo } from "./components/NewTodo"
import { TodoList } from "./components/TodoList"
import { useListTodo } from "./contexts/listTodo";

export interface ToDoProps {
  id: string;
  toDo: string;
  created_at: Date;
  isChecked: boolean;
}

function App() {

  const { contextList, setContextList } = useListTodo()
  const [changeTodo, setChangeToDo] = useState<ToDoProps[]>([])
  const [changeContext, setChangeContext] = useState(false)
  const [countCompleted, setCountCompleted] = useState<number>(0)

  function completedTodo(idToDo: string, isChecked: boolean) {
    for (let x in contextList) {
      if (contextList[x].id === idToDo) {
        contextList[x].isChecked = isChecked
        setChangeToDo(contextList)
        setChangeContext(!changeContext)   
      }
    }
  }

  function deleteTodo(idToDo: string) {
    const filteredList = contextList.filter((task: ToDoProps) => task.id !== idToDo)
    setContextList(filteredList)
    setCountCompleted((prevCount) => prevCount > 0 ? prevCount - 1 : 0)
  }

  // Optei por criar 2 estados, um que armazena o array e outro que indica que houve alteração no array
  // Como a alteração dessa função é apenas em 1 key de 1 objeto do Array o React não reconhece que mudou
  useEffect(() => {
    if (changeTodo.length) {
      setContextList(changeTodo)
      const count = changeTodo.filter(toDo => toDo.isChecked === true).length;
      setCountCompleted(count)
    }
  }, [changeTodo, changeContext])

  return (
    <div className="bg-gray-600 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto py-16 px-3 bg-gray-600 flex flex-col items-center justify-center">
      <NewTodo />
      <TodoList list={contextList} onDelete={deleteTodo} completedTodo={completedTodo} countCompletedToDos={countCompleted}/>
      </main>
    </div>
  )
}

export default App
