import { KeyboardEvent, useEffect, useState } from "react"
import Todo from "./Todo"

export interface TodoItem {
  id: number,
  taskName: string,
  isCompleted: boolean,
}

export default function TodoList() {
  const [tasks, setTasks] = useState<TodoItem[]>([])
  const [inputValue, setInputValue] = useState<string>('')


  useEffect(() => {
    const fetchTasks = async () => {
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
    fetchTasks()
  }, [])

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        taskName: inputValue.trim(),
        isCompleted: false,
      }
      setTasks([...tasks, newTask])
      setInputValue('')
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')
      addTodo()
  }

  const toggleTasks = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    ))

  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id
    ))
  }


  return (
    <div className="flex flex-col max-h-[600] p-3 h-full border-3 bg-neutral-100 rounded-lg shadow-[4px_6px_0_0_black]">
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 p-2 min-h-0">

        <ul className="">
          {
            tasks.map(task => (
              <li key={task.id}>
                <Todo
                  task={task}
                  toggleTasks={() => {
                    toggleTasks(task.id)
                  }}
                  removeTask={() => {
                    removeTask(task.id)
                  }}
                />

              </li>
            ))
          }
        </ul>
      </div>

      <div className="mt-auto p-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What are we doing today?"
          className="w-full bg-slate-100 p-4 text-xl border-3 rounded-lg "
        />
      </div>
    </div>
  )
}
