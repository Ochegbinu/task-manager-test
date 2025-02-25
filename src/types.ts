export interface Task {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
  }
  
  export interface NewTask {
    title: string;
    completed: boolean;
    userId?: number;
  }
  
  export type FilterType = "all" | "pending" | "completed";