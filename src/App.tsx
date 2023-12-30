import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    description: 'Test task',
    completed: true
  }])

  const [newTaskDescription, setNewTaskDescription] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: Date.now(),
      description: newTaskDescription,
      completed: false
    }

    setTasks([...tasks, newTask])
    setNewTaskDescription('');
  }

  function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskDescription(event.target.value);
  }

  function handleNewTaskDesciptionInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.taskInputGroup}>
          <form onSubmit={handleCreateNewTask} className={styles.taskInputForm}>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={newTaskDescription}
              onChange={handleNewTaskDescriptionChange}
              onInvalid={handleNewTaskDesciptionInvalid}
              className={styles.taskInput}
              required
            />
            <button
              title="Criar nova tarefa"
              type="submit"
              className={styles.taskInputButton}
            >
              Criar <PlusCircle size={20} />
            </button>
          </form>
        </div>
        <div className={styles.dashboardWrapper}>
          <div className={styles.statsWrapper}>
            <div className={styles.stats}>
              <p className={styles.total}> Tarefas criadas</p>
              <div>0</div>
            </div>

            <div className={styles.stats}>
              <p className={styles.fulfilled}>Concluídas</p>
              <div>0</div>
            </div>
          </div>
          <div>
            {/* <div className={styles.emptyBoard}>
              <img src={clipboard} alt="" />
              <div className={styles.emptyBoardMessage}>
                <p>
                  <b>Você ainda não tem tarefas cadastradas</b>
                </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div> */}

            <div className={styles.tasksBoard}>
              {tasks.map(task => {
                return (
                  <Task description={task.description} completed={task.completed} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
