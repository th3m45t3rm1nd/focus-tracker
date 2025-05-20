import TimerButtons from "./TimerButtons"
export default function Timer() {
  return (
    <div className="m-4 p-4 border-2 border-solid flex items-center justify-center flex-col">
      <h1 className="font-mono text-4xl text-center">Timer</h1>
      <h3 className="text-5xl font-mono font-bold">25:00</h3>
      <TimerButtons />
    </div>
  )
}
