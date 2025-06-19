import React from "react";
import TaskItem from "./TaskItem";

// Composant pour afficher la liste des tâches
// Il prend en props les tâches, la fonction de suppression, de mise à jour et de
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