import Button from "../components/Button.tsx";
import type { ITask } from "../types/Task.type.ts";

interface ITaskProps {
  task: ITask;
  handleDeleteTask: (id: string) => void;
}

function Task({ task, handleDeleteTask }: ITaskProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4 items-start mt-5">
      <input className="mt-1 w-5 h-5 rounded-lg" type="checkbox" />
      <div className="flex flex-col w-full gap-2">
        <h1>{task.title}</h1>
        <p className="text-gray-700">{task.description}</p>
        <div className="flex items-center gap-x-2">
          <p className="block py-0.3 px-3 rounded-3xl border border-gray-200 text-[14px]">
            {task.category}
          </p>
          <p className="text-[14px]">10:00</p>
        </div>
        <div className="flex items-center gap-2 w-min">
          <Button action={() => {}} type="button" mode="light">
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
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            <p>Start</p>
          </Button>
          <Button action={() => {}} type="button" mode="light">
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            <p>Edit</p>
          </Button>
          <Button
            action={() => handleDeleteTask(task.id)}
            type="button"
            mode="delete"
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            <p>Delete</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Task;
