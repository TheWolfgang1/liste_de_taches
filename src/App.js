import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // État du filtre

  // Charger les tâches depuis localStorage au démarrage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Sauvegarder les tâches dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Fonction pour ajouter une tâche
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (taskToDelete) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      setTasks(tasks.filter((t) => t !== taskToDelete));
    }
  };

  // Fonction pour mettre à jour une tâche
  const updateTask = (oldTask, updatedTask) => {
    setTasks(tasks.map((t) => (t === oldTask ? updatedTask : t)));
  };

  // Fonction pour basculer l'état terminé/non-terminé d'une tâche
  const toggleCompletion = (taskToToggle) => {
    setTasks(
      tasks.map((t) =>
        t === taskToToggle
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  // Filtrer les tâches selon le filtre sélectionné
  let filteredTasks = tasks;

  if (filter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  return (
    <div className="App">
      <h1>Ma to-do list</h1>

      {/* Sélecteur de filtre */}
      <label htmlFor="filter">Filtrer : </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Toutes</option>
        <option value="active">Actives</option>
        <option value="completed">Terminées</option>
      </select>

      {/* Formulaire d'ajout */}
      <TaskForm addTask={addTask} />

      {/* Liste des tâches filtrée */}
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default App;