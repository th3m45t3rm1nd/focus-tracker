type TodoProps = {
  task: {
    id: number
    taskName: string,
    isCompleted: boolean,
  },
  toggleTasks: () => void,
  removeTask: () => void,
}

export default function Todo({ task, toggleTasks, removeTask }: TodoProps) {
  // const toggleComplete = () => {
  //   task.isCompleted = !task.isCompleted
  //   console.log(task.isCompleted)
  // }
  return (
    <div className="flex items-center bg-yellow-100 border-3 my-4 p-4 rounded-lg hover:shadow-[2px_3px_0_0_black] hover:translate-x-[-2px] hover:translate-y-[-3px] transition-all ease-out transform-gpu cursor-pointer select-none">
      <span className={`text-xl ${task.isCompleted ? 'line-through' : ''}`}>{task.taskName}</span>
      <div className="float-right">
        <button className="bg-emerald-400 font-mono font-semibold text-xl text-center p-3 m-3 border-3 border-black rounded-lg shadow-[3px_4px_0_0_black] hover:shadow-[2px_3px_0_0_black] hover:translate-x-[2px] hover:translate-y-[3px] active:shadow-[0px_0px_0_0_black] active:translate-x-[3px] active:translate-y-[4px] transition-all duration-75 ease-out select-none cursor-pointer transform-gpu" onClick={toggleTasks}>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
        </button>
        <button className="bg-rose-400 font-mono font-semibold text-xl text-center p-3 m-3 border-3 border-black rounded-lg shadow-[3px_4px_0_0_black] hover:shadow-[2px_3px_0_0_black] hover:translate-x-[2px] hover:translate-y-[3px] active:shadow-[0px_0px_0_0_black] active:translate-x-[3px] active:translate-y-[4px] transition-all duration-75 ease-out select-none cursor-pointer transform-gpu" onClick={removeTask}>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        </button>
      </div>
    </div>
  )
}
