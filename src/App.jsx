import { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Todo from "./routes/todo/Todo";
import Landing from "./routes/home/Landing";
import { Route, Routes } from "react-router";
import About from "./routes/about/About";
import { useEffect } from "react";
// All clear! Time to relax or add your first task.

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("todos");

    return JSON.parse(storedTasks) || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <NavBar />

        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route
            path={"/todo"}
            element={<Todo tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>

        <Footer tasks={tasks} />
      </main>
    </>
  );
}

export default App;
