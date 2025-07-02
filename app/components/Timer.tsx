import { useState } from "react"
import TimerButtons from "./TimerButtons"
import TimerOptionsButtons from "./TimerOptionsButtons";

enum TimerOptions {
  DeepWork,
  Pomodoro,
  ShortBreak,
  LongBreak,
}

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const [currTimerOption, setCurrTimerOption] = useState<TimerOptions>(TimerOptions.Pomodoro)

  const statusColors = {
    [TimerOptions.DeepWork]: 'h-full bg-neutral-100 shadow-[4px_6px_0_0] rounded-lg p-4 border-3 border-solid flex items-center justify-center flex-col ',
    [TimerOptions.Pomodoro]: 'h-full bg-neutral-100 shadow-[4px_6px_0_0] rounded-lg p-4 border-3 border-solid flex items-center justify-center flex-col',
    [TimerOptions.ShortBreak]: 'h-full bg-neutral-100 shadow-[4px_6px_0_0] rounded-lg p-4 border-3 border-solid flex items-center justify-center flex-col',
    [TimerOptions.LongBreak]: 'h-full bg-neutral-100 shadow-[4px_6px_0_0] rounded-lg p-4 border-3 border-solid flex items-center justify-center flex-col',
  } as const

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
    } else {
      setIsRunning(false)
      window.clearInterval(intervalId)
      setIntervalId(undefined)
    }
  }

  function toDeepWork() {
    window.clearInterval(intervalId)
    setIntervalId(undefined)
    setIsRunning(false)
    setTimeLeft(2 * 60 * 60)
    setCurrTimerOption(TimerOptions.DeepWork)
  }

  function toPomodoro() {
    window.clearInterval(intervalId)
    setIntervalId(undefined)
    setIsRunning(false)
    setTimeLeft(25 * 60)
    setCurrTimerOption(TimerOptions.Pomodoro)
  }

  function toShortBreak() {
    window.clearInterval(intervalId)
    setIntervalId(undefined)
    setIsRunning(false)
    setTimeLeft(5 * 60)
    setCurrTimerOption(TimerOptions.ShortBreak)
  }

  function toLongBreak() {
    window.clearInterval(intervalId)
    setIntervalId(undefined)
    setIsRunning(false)
    setTimeLeft(15 * 60)
    setCurrTimerOption(TimerOptions.LongBreak)
  }

  const hrs = Math.floor(timeLeft / 3600)
  const min = Math.floor((timeLeft - hrs * 3600) / 60)
  const sec = timeLeft % 60

  const hrStr = String(hrs).padStart(2, "0")
  const minStr = String(min).padStart(2, "0");
  const secStr = String(sec).padStart(2, "0");

  return (
    <div className={statusColors[currTimerOption]}>
      <TimerOptionsButtons
        toDeepWork={toDeepWork}
        toPomodoro={toPomodoro}
        toShortBreak={toShortBreak}
        toLongBreak={toLongBreak}
      />
      {currTimerOption == TimerOptions.DeepWork
        ?
        <h3 className="text-9xl font-mono font-semibold py-9 [font-variant-numeric:tabular-nums]">{hrStr}:{minStr}:{secStr}</h3>
        :
        <h3 className="text-9xl font-mono font-semibold py-9 [font-variant-numeric:tabular-nums]">{minStr}:{secStr}</h3>
      }
      <TimerButtons
        onStart={startTimer}
        isRunning={isRunning}
      />
    </div>
  )
}
