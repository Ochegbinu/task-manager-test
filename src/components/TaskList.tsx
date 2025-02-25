import { Task } from "@/types";
import { TrashIcon } from "lucide-react";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export default function TaskList({
  tasks,
  onToggleComplete,
  onDeleteTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks found. Add a task to get started!
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <li key={task.id} className="py-4 flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              id={`task-${task.id}`}
              aria-label={`Mark "${task.title}" as ${
                task.completed ? "incomplete" : "complete"
              }`}
            />
            <label
              htmlFor={`task-${task.id}`}
              className={`ml-3 text-sm font-medium ${
                task.completed ? "text-gray-400 line-through" : "text-gray-700"
              }`}
            >
              {task.title}
            </label>
          </div>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="ml-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            aria-label={`Delete task "${task.title}"`}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}
