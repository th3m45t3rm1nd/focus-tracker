"use client"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] gap-5 p-4 ">
      <div className="">
        < Header />
      </div >
      <div className=" grid grid-cols-2 min-h-0 gap-5 h-full">
        <div className="col-span-1 h-full">
          <Timer />
        </div>
        <div className="col-span-1">
          <TodoList />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div >


  );
}
