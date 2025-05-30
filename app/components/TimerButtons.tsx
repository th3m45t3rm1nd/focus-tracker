type TimerButtonProps = {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerButtons({ onStart, onPause, onReset }: TimerButtonProps) {
  return (
    <div>
      <button className="bg-white m-2 font-bold py-5 px-11 rounded-lg border-3 shadow-[0_0_0_0] hover:shadow-[4px_6px_0_0] transition-duration-1000" onClick={onStart}>Start</button>
      <button className="bg-white m-2 font-bold py-5 px-11 rounded-lg border-3 shadow-[0_0_0_0] hover:shadow-[4px_6px_0_0] transition-duration-1000" onClick={onPause}>Pause</button>
      <button className="bg-white m-2 font-bold py-5 px-11 rounded-lg border-3 shadow-[0_0_0_0] hover:shadow-[4px_6px_0_0] transition-duration-1000" onClick={onReset}>Reset</button>
    </div >
  )
}
