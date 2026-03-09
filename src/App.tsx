import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Task from "./components/Task";
import TaskAddModal from "./components/TaskAddModal";
import type { ITask, TTaskStatus } from "./types/Task.type.ts";
function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filterSelected, setFilterSelected] = useState<TTaskStatus | "all">(
    "all",
  );

  useEffect(() => {
    setTasks(getDataFromLocalStorage());
  }, []);

  const setDataToLocalStorage = (data: ITask[]) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };
  const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  };

  const handleToggleTaskModal = () => {
    setIsShowModal((prev) => !prev);
  };

  const handleAddTask = (formData: ITask) => {
    const newTasks = [...tasks, formData];
    setTasks(newTasks);
    setDataToLocalStorage(newTasks);
  };

  const handleDeleteTask = (id: string) => {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setDataToLocalStorage(filteredTasks);
    setTasks(filteredTasks);
  };

  const handleFilterTasks = (type: TTaskStatus | "all") => {
    setFilterSelected(type);

    const tasksFromStorage: ITask[] = getDataFromLocalStorage();
    if (type === "all") {
      setTasks(tasksFromStorage);
    } else {
      setTasks(tasksFromStorage.filter((task) => task.status === type));
    }
  };

  const handleUpdateTaskTime = (id: string, newTime: number) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id
        ? { ...item, time: newTime, status: "inprogress" as TTaskStatus }
        : item,
    );
    setTasks(updatedTasks);
    setDataToLocalStorage(updatedTasks);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 my-10 rounded-lg border border-gray-200 bg-gray-200/25">
      <h1 className="text-neutral-900 mb-2">MAJESTEY LONDON</h1>
      <p className="text-neutral-600">Shopify Site Tasks</p>
      <div className="flex items-center  gap-2 mt-7">
        <Button type="button" action={handleToggleTaskModal} mode="dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <p>Add task</p>
        </Button>
        <Button action={() => {}} type="button" mode="light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <p>Export</p>
        </Button>
        <Button action={() => {}} type="button" mode="light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          <p>Import</p>
        </Button>
      </div>
      <div className="flex items-center justify-between gap-10 border border-gray-200 rounded-lg py-2 px-4 bg-white mt-7">
        <form
          className="flex items-center bg-gray-200/25 border border-gray-200 rounded-lg py-1.5 px-2.5 flex-1 gap-2 focus-within:ring-1 focus-within:ring-blue-500 transition duration-300"
          action=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input className="w-full outline-none bg-transparent" type="text" />
        </form>
        <div className="flex items-center gap-2">
          <Button
            action={() => handleFilterTasks("all")}
            type="button"
            mode={filterSelected === "all" ? "dark" : "light"}
          >
            All
          </Button>
          <Button
            action={() => handleFilterTasks("todo")}
            type="button"
            mode={filterSelected === "todo" ? "dark" : "light"}
          >
            To Do
          </Button>
          <Button
            action={() => handleFilterTasks("inprogress")}
            type="button"
            mode={filterSelected === "inprogress" ? "dark" : "light"}
          >
            In progress
          </Button>
          <Button
            action={() => handleFilterTasks("completed")}
            type="button"
            mode={filterSelected === "completed" ? "dark" : "light"}
          >
            Completed
          </Button>
        </div>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTaskTime={handleUpdateTaskTime}
        ></Task>
      ))}

      {isShowModal && (
        <TaskAddModal
          handleAddTask={handleAddTask}
          handleToggleTaskModal={handleToggleTaskModal}
        ></TaskAddModal>
      )}
    </div>
  );
}

export default App;
