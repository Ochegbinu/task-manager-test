export interface Task {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    priority?: "high" | "medium" | "low"; 

  }
  
  export interface NewTask {
    title: string;
    completed: boolean;
    userId?: number;
  }
  
  export type FilterType = "All Tasks" | "pending" | "completed";