type TimerOptionsProps = {
  toDeepWork: () => void;
  toPomodoro: () => void;
  toShortBreak: () => void;
  toLongBreak: () => void;
}

export default function TimerOptions({ toDeepWork, toPomodoro, toShortBreak, toLongBreak }: TimerOptionsProps) {
  return (
    <div>
      <button className="bg-yellow-300 font-mono font-semibold text-xl text-center p-3 m-3 border-3 border-black rounded-lg shadow-[4px_6px_0_0_black] hover:shadow-[2px_3px_0_0_black] hover:translate-x-[2px] hover:translate-y-[3px] active:shadow-[0px_0px_0_0_black] active:translate-x-[4px] active:translate-y-[6px] transition-all duration-75 ease-out select-none cursor-pointer transform-gpu" onClick={toDeepWork} >Deep Work</button>
      <button className="bg-teal-400 font-mono font-semibold text-xl text-center p-3 m-3 border-3 border-black rounded-lg shadow-[4px_6px_0_0_black] hover:shadow-[2px_3px_0_0_black] hover:translate-x-[2px] hover:translate-y-[3px] active:shadow-[0px_0px_0_0_black] active:translate-x-[4px] active:translate-y-[6px] transition-all duration-75 ease-out select-none cursor-pointer transform-gpu" onClick={toPomodoro}>Pomodoro</button>
      <button className="bg-cyan-300 font-mono font-semibold text-xl text-center p-3 m-3 border-3 border-black rounded-lg shadow-[4px_6px_0_0_black] hover:shadow-[2px_3px_0_0_black] hover:translate-x-[2px] hover:translate-y-[3px] active:shadow-[0px_0px_0_0_black] active:translate-x-[4px] active:translate-y-[6px] transition-all duration-75 ease-out select-none cursor-pointer transform-gpu" onClick={toShortBreak}>Short Break</button>
      <button className="bg-indigo-300 font-mono font-semibold text-xl text-center p-3 m-3 border-3 border-black rounded-lg shadow-[4px_6px_0_0_black] hover:shadow-[2px_3px_0_0_black] hover:translate-x-[2px] hover:translate-y-[3px] active:shadow-[0px_0px_0_0_black] active:translate-x-[4px] active:translate-y-[6px] transition-all duration-75 ease-out select-none cursor-pointer transform-gpu" onClick={toLongBreak}>Long Break</button>
    </div>

  )

} 
