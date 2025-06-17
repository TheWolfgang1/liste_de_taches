import React, {useState} from "react";

function TaskForm({addTask}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description || !dueDate) {
            alert("Le nom, la description et la date d'échéance sont requis.");
            return;
        }
        const newTask = {
            name,
            description,
            dueDate: new Date(dueDate).toISOString(),
            completed: false,
        };
        addTask(newTask);
        setName("");
        setDescription("");
        setDueDate("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom de la tâche"
                required
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description de la tâche"
                required
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <button type="submit">Ajouter une tâche</button>
        </form>
    );
}

export default TaskForm;