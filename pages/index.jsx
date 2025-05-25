import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, done: false };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="bg-green-800 text-2xl text-red-600 font-bold text-center mb-4">
          Task Tracker
        </h1>
        <TaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onUpdate={updateTask}
          onToggleDone={toggleDone}
          onDelete={deleteTask}
        />
      </div>
    </main>
  );
}
