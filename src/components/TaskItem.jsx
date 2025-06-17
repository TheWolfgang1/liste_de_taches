import React, {useState} from "react";
import "../App.css";


function TaskItem({
    task,
    updateTask,
    toggleCompletion,
    deleteTask,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setname] = useState(task.name);
    const [description, setDescription] = useState(task.description);

    const handleUpdate = (e) => {
        if (!name.trim || !description.trim) {
            alert("Le nom et la description sont requis.");
            return;
        }

        updateTask({ ...task, name, description });
        setIsEditing(false);
    };

    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Nom de la tâche"
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description de la tâche"
                    />
                    <button onClick={handleUpdate}>Mettre à jour</button>
                    <button onClick={() => setIsEditing(false)}>Annuler</button>
                </div>
            ) : (
                <div>
                    <span
                        className={task.completed ? "completed" : ""}
                        onClick={() => toggleCompletion(task)}
                    >
                        {task.name} - {task.description}
                    </span>
                    <button onClick={() => setIsEditing(true)}>Modifier</button>
                    <button onClick={() => deleteTask(task)}>Supprimer</button>
                </div>
            )}
        </li>
    )
}

export default TaskItem;