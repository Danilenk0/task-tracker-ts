import Button from "../components/Button";
import { useState } from "react";
import type { ITask } from "../types/Task.type.ts";

interface TaskAddModalProps {
  toggleTaskModal: () => void;
  handleAddTask: (fromData: ITask) => void;
}

function TaskAddModal({ toggleTaskModal, handleAddTask }: TaskAddModalProps) {
  const [formData, setFormData] = useState<ITask>({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    category: "",
    status: "todo",
    time: 0,
  });
  return (
    <div className="fixed top-0 left-0 bg-black/70 w-full h-full flex items-center">
      <div className="bg-white border-2 border-gray-200 rounded-lg w-2xl mx-auto p-5">
        <div className="flex flex-row-reverse justify-between mb-5">
          <button onClick={toggleTaskModal} className="h-min p-1 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-0.7">
            <h3 className="text-xl font-medium">Add new task</h3>
            <p className="text-neutral-500 ">
              Create a new task to track for your Shopify site.
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask(formData);
            setFormData({
              id: crypto.randomUUID(),
              title: "",
              description: "",
              category: "",
              status: "todo",
              time: 0,
            });
            toggleTaskModal();
          }}
          action=""
        >
          <div className="flex flex-col gap-1.5 mb-4">
            <label htmlFor="title">Task title</label>
            <input
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    title: e.target.value,
                  };
                })
              }
              value={formData.title}
              className="border-2 border-gray-200 rounded-sm py-0.5 px-2 bg-neutral-100"
              id="title"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label htmlFor="description">Task description (option)</label>
            <textarea
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    description: e.target.value,
                  };
                })
              }
              value={formData.description}
              className="border-2 border-gray-200 rounded-sm py-0.5 px-2 bg-neutral-100"
              id="description"
              cols={15}
              required
            />
          </div>
          <div className="flex flex-col gap-1.5 mb-4">
            <label className="" htmlFor="category">
              Category
            </label>
            <select
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    category: e.target.value,
                  };
                })
              }
              value={formData.category}
              className="border-2 border-gray-200 w-full py-0.5 px-2 rounded-sm "
              name=""
              id="category"
            >
              <option defaultChecked value="Catalog">
                Catalog
              </option>
              <option value="PDP">PDP</option>
              <option value="Header">Header</option>
              <option value="Home">Home</option>
              <option value="Sport & Purple">Sport & Purple</option>
              <option value="About Us">About Us</option>
              <option value="Footer">Footer</option>
              <option value="Mobile">Mobile</option>
              <option value="Global">Global</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex gap-2 justify-end">
            <Button action={() => {}} type="button" mode="light">
              Cancel
            </Button>
            <Button action={() => {}} type="submit" mode="dark">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskAddModal;
