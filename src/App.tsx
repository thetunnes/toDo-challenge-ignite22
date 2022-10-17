import { useCallback, useEffect, useState } from "react"
import { Header } from "./components/Header"
import { NewTodo } from "./components/NewTodo"
import { TodoList } from "./components/TodoList"
import { useListTodo } from "./contexts/listTodo";


function App() {

  const { contextList, setContextList } = useListTodo()
  const [deleteThisToDo, setDeleteThisToDo] = useState("")
  
  function addTodo(toDo: string) {
    setContextList((prev) => {
      if (prev.some(task => task === toDo)) {
        return prev
      } else {
        return [...prev, toDo]
      }
    })
  }

  useEffect(() => {
    const filteredList = contextList.filter((task: string) => task !== deleteThisToDo)
    setContextList(filteredList)
  }, [deleteThisToDo])

  return (
    <div className="bg-gray-600 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto py-16 px-3 bg-gray-600 relative flex items-center justify-center">
      <NewTodo addTodo={addTodo} />
      <TodoList list={contextList} onDelete={setDeleteThisToDo}/>
      </main>
    </div>
  )
}

export default App
