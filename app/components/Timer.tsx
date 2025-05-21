import { useState } from "react"
import TimerButtons from "./TimerButtons"
export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(3);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  function startTimer() {
    if (isRunning == false) {
      setIsRunning(true)
      const id = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            window.clearInterval(id)
            setIntervalId(undefined)
            setIsRunning(false)
            return 0
          }
          return prev - 1
        }
        )
      }, 1000)
      setIntervalId(id)
    }
  }

  function pauseTimer() {
    setIsRunning(false)
    window.clearInterval(intervalId)
    setIntervalId(undefined)
  }

  function resetTimer() {
    window.clearInterval(intervalId)
    setIntervalId(undefined)
    setIsRunning(false)
    setTimeLeft(25 * 60)

  }
  const min = Math.floor(timeLeft / 60)
  const sec = timeLeft % 60

  const minStr = String(min).padStart(2, "0");
  const secStr = String(sec).padStart(2, "0");

  return (
    <div className="m-4 p-4 border-2 border-solid flex items-center justify-center flex-col">
      <h1 className="font-mono text-4xl text-center">Timer</h1>
      <h3 className="text-5xl font-mono font-bold">{minStr}:{secStr}</h3>

      <TimerButtons
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
      />
    </div>
  )
}
