"use client"
import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className="w-1/2 mx-auto">
      <Header />
      <Timer />
    </div>
  );
}
