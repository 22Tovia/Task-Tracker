import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder=" New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}
