import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onUpdate, onToggleDone, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks yet</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
