import { useState, FormEvent, ChangeEvent } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
  isLoading: boolean;
}

export default function TaskForm({ onAddTask, isLoading }: TaskFormProps) {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="task-input" className="block text-sm font-medium text-gray-700 mb-1">
          Add New Task
        </label>
        <div className="flex">
          <input
            id="task-input"
            type="text"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder="Enter task description"
            className="flex-1 block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!title.trim() || isLoading}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
            aria-label="Add task"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
