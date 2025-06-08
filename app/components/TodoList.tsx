import { useEffect, useState } from "react"
import Todo from "./Todo"

export interface TodoItem {
  id: number,
  taskName: string,
  isCompleted: boolean,
}

export default function TodoList() {
  const [tasks, setTasks] = useState<TodoItem[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:8080/todos")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setTasks(data)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchTodos()
  }, [])


  return (
    <div className="border-2 p-4 h-full  bg-rose-300 rounded-lg shadow-[4px_6px_0_0_black]">
      <ul className="">
        {
          tasks.map(task => (
            <li key={task.id}>
              <Todo task={task} />
            </li>
          ))
        }
      </ul>

      <footer>
        <input
          type="text"
          placeholder="What are we doing today?"
          className="w-full bg-yellow-100 p-4 text-xl border-3 rounded-lg "
        />
      </footer>
    </div>
  )
}
