import { Task } from "@/types";
import { TrashIcon } from "lucide-react";

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export default function TaskList({ tasks, onToggleComplete, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks found. Add a task to get started!
      </div>
    );
  }

  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-left text-sm font-medium text-gray-700">Task</th>
          <th className="p-2 text-left text-sm font-medium text-gray-700">Status</th>
          <th className="p-2"></th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className="border-t border-gray-200">
            <td className="p-2 text-sm text-gray-700">{task.title}</td>
            <td className="p-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                id={`task-${task.id}`}
                aria-label={`Mark \"${task.title}\" as ${task.completed ? "incomplete" : "complete"}`}
              />
            </td>
            <td className="p-2">
              <button
                onClick={() => onDeleteTask(task.id)}
                className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                aria-label={`Delete task \"${task.title}\"`}
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
