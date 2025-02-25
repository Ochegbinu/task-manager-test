// File: lib/api.ts
import { Task, NewTask } from "@/types";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(API_BASE_URL);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch tasks: ${response.status}`);
  }
  
  return response.json();
}

export async function addTask(task: NewTask): Promise<Task> {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to add task: ${response.status}`);
  }
  
  return response.json();
}

export async function updateTask(id: number, task: Task): Promise<Task> {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  
  if (!response.ok) {
    throw new Error(`Failed to update task: ${response.status}`);
  }
  
  return response.json();
}

export async function deleteTask(id: number): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
  
  if (!response.ok) {
    throw new Error(`Failed to delete task: ${response.status}`);
  }
  
  return true;
}