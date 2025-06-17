import React, {useEffect, useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);

  // charger depuis le localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(storedTasks);
  }, []);

  // sauvegarder dans le localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  // fonctions pour ajouter, supprimer, mettre à jour et basculer l'état de la tâche
  const addTask = (newTask) => {
    setTask([...task, newTask]);
  };

  const deleteTask = (taskToDelete) => {
    setTask(task.filter((t) => t !== taskToDelete));
  };

  const updateTask = (oldTask, updatedTask) => {
    setTask(task.map((t) => (t === oldTask ? updatedTask : t)));
  };

  const toggleCompletion = (taskToToggle) => {
    setTask(
      task.map((t) =>
        t === taskToToggle ? {...t, completed: !t.completed} : t
      )
    );
  }
  return (
    <div className="App">
      <h1>Ma to-do list</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={task}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default App;