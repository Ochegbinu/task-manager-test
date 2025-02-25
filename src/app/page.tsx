"use client";

import { useState, useEffect } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";
import { fetchTasks, addTask, updateTask, deleteTask } from "@/lib/api";
import { Task, FilterType } from "@/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTasks();
        
        // Limit to first 10 tasks for better usability with JSONPlaceholder
        const limitedTasks = data.slice(0, 10);
        
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        } else {
          setTasks(limitedTasks);
          localStorage.setItem("tasks", JSON.stringify(limitedTasks));
        }
      } catch (err) {
        setError("Failed to fetch tasks. Please try again later.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = async (title: string) => {
    try {
      setIsLoading(true);
      const newTask = await addTask({ title, completed: false });
      
      // JSONPlaceholder doesn't actually save our new task, so we'll create a new ID
      newTask.id = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
      
      setTasks([...tasks, newTask]);
    } catch (err) {
      setError("Failed to add task. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleComplete = async (id: number) => {
    try {
      setIsLoading(true);
      const taskToUpdate = tasks.find((task) => task.id === id);
      if (!taskToUpdate) return;
      
      const updatedTask = await updateTask(id, {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      });
      
      setTasks(
        tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
      );
    } catch (err) {
      setError("Failed to update task. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      setIsLoading(true);
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      setError("Failed to delete task. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "completed") return task.completed;
    if (activeFilter === "pending") return !task.completed;
    return true; // "all" filter
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Task Manager</h1>
          
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6" role="alert">
              <p>{error}</p>
              <button 
                className="text-sm underline mt-1" 
                onClick={() => setError(null)}
                aria-label="Dismiss error"
              >
                Dismiss
              </button>
            </div>
          )}
          
          <TaskForm onAddTask={handleAddTask} isLoading={isLoading} />
          
          <div className="mt-8">
            <TaskFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            
            <div className="mt-4 relative">
              {isLoading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                  <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
              )}
              
              <TaskList
                tasks={filteredTasks}
                onToggleComplete={handleToggleComplete}
                onDeleteTask={handleDeleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}