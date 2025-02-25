# Task Manager

A responsive and accessible task management application built with Next.js App Router, TailwindCSS, and React Hooks. This application allows users to create, update, mark as complete, and delete tasks through integration with an external API.

## Features

- Fetch tasks from the JSONPlaceholder API
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Responsive design
- Accessibility compliant
- Loading states for API interactions

## Technologies Used

- **Next.js (App Router)** - For application framework and routing
- **TailwindCSS** - For styling
- **React Hooks** - For state management
- **JSONPlaceholder API** - For task data

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ochegbinu/task-manager-test.git
   cd task-manager-test
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## API Integration

The application interfaces with JSONPlaceholder API:

- **Base URL**: https://jsonplaceholder.typicode.com/todos
- **Endpoints**:
  - `GET /todos` - Fetch all tasks
  - `POST /todos` - Add a new task
  - `PUT /todos/:id` - Update a task (mark as completed)
  - `DELETE /todos/:id` - Delete a task

## Usage

### Fetching Tasks
Tasks are automatically fetched when the application loads.

### Adding a Task
1. Enter the task title in the input field
2. Click the "Add Task" button

### Marking a Task as Completed
1. Click the checkbox next to a task to toggle its completion status

### Deleting a Task
1. Click the delete (trash) icon next to a task

## Bonus Features Implemented

- Task filters (All, Completed, Pending)
- Local storage persistence for tasks
- SWR for data fetching and caching



## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

