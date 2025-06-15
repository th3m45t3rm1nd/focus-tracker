type TimerButtonProps = {
  onStart: () => void;
  isRunning: boolean;
}


export default function TimerButtons({ onStart, isRunning }: TimerButtonProps) {
  return (
    <div>
      <button className={`min-w-24 m-3 p-6 font-mono font-semibold text-2xl text-center  rounded-lg border-3 shadow-[4px_6px_0_0_black] hover:shadow-[2px_3px_0_0_black] hover:translate-x-[2px] hover:translate-y-[3px] active:shadow-[0px_0px_0_0_black] active:translate-x-[4px] active:translate-y-[6px] cursor-pointer  transition-all duration-75 select-none ease-out transform-gpu ${isRunning ? 'bg-rose-400' : 'bg-emerald-400'} `} onClick={onStart}>{isRunning ? 'Pause' : 'Start'}</button>
    </div >
  )
}
