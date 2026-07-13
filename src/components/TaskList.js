function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
  <div>
    <h2>Todo List</h2>

    {tasks.map((task) => (
      <div className="task" key={task._id}>
        <div className="task-left">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task)}
          />

          <span className={task.completed ? "completed" : ""}>
            {task.task}
          </span>
        </div>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);
}
export default TaskList;