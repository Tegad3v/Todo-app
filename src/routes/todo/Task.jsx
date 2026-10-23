import { useState } from "react";
import { FaCalendar, FaPencilAlt, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Task({ task, setTasks }) {
  const [onEdit, setOnEdit] = useState(false);
  const [formInput, setFormInput] = useState("");

  // Edit Task Handler
  const editTaskHandler = (e) => {
    e.preventDefault();

    if (!formInput) return;

    // Sets Task Title To User'd Input On Submit
    setTasks((tasks) =>
      // Map Through Previous Tasks
      tasks.map((tas) =>
        // If Id Matches Task Id, Set Objects Title To User Input
        tas.id == task.id ? { ...tas, title: formInput } : tas,
      ),
    );

    // Clears Form After Submit
    setFormInput("");

    // Closes Edit Form After Submit
    setOnEdit(false);
  };

  // Delete Task Handler
  const deleteTaskHandler = () => {
    setTasks((tasks) => {
      // Filter for selected Id
      const newTasks = tasks.filter((tas) => tas.id !== task.id);

      // Returns Filtered Array Where Selected Id is no More
      return newTasks;
    });
  };

  // Task Completion Handler
  const taskComplitionHandler = () => {
    setTasks((tasks) =>
      // Map Through Each Task
      tasks.map((tas) =>
        // Where Id Matches, Set Completed - True
        tas.id == task.id ? { ...tas, completed: true } : tas,
      ),
    );
  };

  return (
    <>
      <div
        className={`${task.completed ? "bg-gray-200" : "bg-white"}  shadow-2xl p-5 rounded-lg grid grid-cols-12 gap-2 justify-between"`}
      >
        <div className="col-span-11 flex justify-between">
          <div className="flex gap-4 items-center">
            {task.completed ? (
              <input type="radio" defaultChecked className="scale-150" />
            ) : (
              <input
                type="radio"
                className="scale-150"
                onChange={() => taskComplitionHandler()}
              />
            )}

            <div>
              <p className={`${task.completed ? "line-through" : " "}`}>
                {onEdit ? (
                  // OnEdit == true, Display Edit Form
                  <form onSubmit={(e) => editTaskHandler(e)}>
                    <div className="flex gap-2">
                      <input
                        value={formInput}
                        type="text"
                        className="focus:outline-0 w-full border border-black p-1 rounded"
                        onChange={(e) => setFormInput(e.target.value)}
                        placeholder={task.title}
                      />

                      <button className="bg-green-400 px-3 p-1 rounded active:bg-green-800">
                        submit
                      </button>
                    </div>
                  </form>
                ) : (
                  // Else, Display Task's Title
                  task.title
                )}
              </p>

              <p className="flex items-center gap-2 text-black/60 p-1 ">
                <FaCalendar />{" "}
                {task.createdAt
                  .toLocaleString()
                  .slice(0, 10)
                  .replaceAll("/", "-")}
              </p>
            </div>
          </div>

          <div>
            <p
              className={`${task.completed ? "text-green-950 bg-green-400" : "text-red-950 bg-red-400"} capitalize py-1 px-3 rounded-full text-sm`}
            >
              {task.completed ? "completed" : "pending"}
            </p>
          </div>
        </div>

        <div className="col-span-1 h-full flex justify-center">
          <div className="mt-auto flex gap-8">
            <button
              className="cursor-pointer active:scale-90"
              onClick={() => !task.completed && setOnEdit((i) => !i)}
            >
              {onEdit ? (
                <IoMdClose className="text-red-700 text-2xl" />
              ) : (
                <FaPencilAlt className="text-blue-700" />
              )}
            </button>

            <button
              className="active:scale-90"
              onClick={() => deleteTaskHandler()}
            >
              <FaTrash className="text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
