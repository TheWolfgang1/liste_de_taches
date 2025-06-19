import React, {useState} from "react";

// Composant pour le formulaire d'ajout de tâche
// Il prend en props la fonction addTask pour ajouter une nouvelle tâche
function TaskForm({addTask}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    

    // Fonction pour gérer la soumission du formulaire
    // Elle vérifie que les champs requis sont remplis avant d'ajouter la tâche
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


    // Rendu du formulaire
    // Il contient des champs pour le nom, la description et la date d'échéance
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