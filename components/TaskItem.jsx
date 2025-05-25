import { useState } from "react";

export default function TaskItem({ task, onUpdate, onToggleDone, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onUpdate(task.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
      <div className="flex items-center gap-2 flex-grow">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggleDone(task.id)}
          className="form-checkbox h-5 w-5 text-blue-500"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow p-1 border-b border-blue-400 focus:outline-none"
          />
        ) : (
          <span
            className={`flex-grow ${
              task.done ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 ml-2">
        <button
          onClick={handleEdit}
          className="text-sm text-blue-600 hover:underline"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-sm text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
