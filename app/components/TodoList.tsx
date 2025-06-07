export default function TodoList() {
  const tasks = [
    { taskName: "Complete Tasks", isCompleted: false },
    { taskName: "Fuck You", isCompleted: true },
  ]
  return (
    <div className="border-2 p-4 h-full  bg-rose-300 rounded-lg shadow-[4px_6px_0_0_black]">
      <ul className="">
        {
          tasks.map(task => (
            <li className="">
              <label className="flex items-center bg-yellow-100 border-3 my-4 p-4 rounded-lg hover:shadow-[2px_3px_0_0_black] hover:translate-x-[-2px] hover:translate-y-[-3px] transition-all ease-out transform-gpu cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-6 h-6 m-2 " />
                <span className="text-xl">{task.taskName}</span>
              </label>
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
