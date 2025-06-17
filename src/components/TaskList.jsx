import React from "react";
import TaskItem from "./TaskItem";


function TaskList({ tasks, deleteTask, updateTask, toggleCompletion }) {
  return (
    <div>
    <ul  className="task-list">
        {tasks.length === 0 ? (
            <li>Aucune tache pour le moment</li>
        ) : (
            tasks.map((task) => (
                <TaskItem
                    key={task.name}
                    task={task}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    toggleCompletion={toggleCompletion}
                />
            ))
        )}
    </ul>
    </div>
  );
}

export default TaskList;