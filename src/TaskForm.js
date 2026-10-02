import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [responsible, setResponsible] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !deadline || !responsible) return;
    addTask({ title, deadline, responsible });
    setTitle("");
    setDeadline("");
    setResponsible("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <input
        type="text"
        placeholder="Responsável"
        value={responsible}
        onChange={(e) => setResponsible(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
