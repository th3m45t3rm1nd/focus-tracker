"use client"
import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className="mx-125">
      <Header />
      <Timer />
      <TodoList />
    </div>
  );
}
