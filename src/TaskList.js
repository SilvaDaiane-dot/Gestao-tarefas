import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h2>Tarefas cadastradas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong> - {task.responsible} - Prazo: {task.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
