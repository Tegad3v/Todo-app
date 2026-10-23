import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddTaskForm({ tasks, setTasks }) {
  const [formInput, setFormInput] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (!formInput) return; // Handle Empty Request

    const newTask = {
      id: tasks.length + 1,
      title: formInput,
      completed: false,
      createdAt: new Date(),
    };

    setTasks((arr) => [...arr, newTask]);

    setFormInput(""); // Cler Form Input
  };

  return (
    <>
      <form
        className="bg-white shadow-2xl p-5 rounded-lg grid grid-cols-12 gap-2 justify-between"
        onSubmit={(e) => addTaskHandler(e)}
      >
        <div className="border border-black col-span-11 p-2 md:px-4 flex items-center gap-3  rounded">
          <FaPlus className="text-black/60" />

          <input
            type="text"
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)}
            className="focus:outline-0 w-full"
            placeholder="Add a new task todo..."
          />
        </div>

        <button className="bg-green-400 rounded active:bg-green-800">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTaskForm;
