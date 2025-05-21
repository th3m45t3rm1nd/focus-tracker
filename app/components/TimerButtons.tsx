type TimerButtonProps = {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerButtons({ onStart, onPause, onReset }: TimerButtonProps) {
  return (
    <div>
      <button className="bg-white m-2 font-bold py-2 px-4 rounded border-b-4" onClick={onStart}>Start</button>
      <button className="bg-white m-2 font-bold py-2 px-4 rounded border-b-4" onClick={onPause}>Pause</button>
      <button className="bg-white m-2 font-bold py-2 px-4 rounded border-b-4" onClick={onReset}>Reset</button>
    </div>
  )
}
