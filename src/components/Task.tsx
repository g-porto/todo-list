import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  id: number,
  description: string,
  completed: boolean,
  onBulletClick: (taskId: number) => void,
  onDeleteTask: (taskId: number) => void
}

export function Task({id, description, completed, onBulletClick, onDeleteTask}: TaskProps) {
  function handleToggleTaskCompleted() {
    onBulletClick(id)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.taskWrapper}>
      <button title="Marcar como completa" onClick={handleToggleTaskCompleted} className={styles.taskRadio}>
        {completed ? <CheckCircle size={17.5} weight="fill" /> : <Circle size={17.5} />}
      </button>
      <p className={`${completed ? styles.taskCompleted : null}`}>
        {description}
      </p>
      <button title="Excluir tarefa" className={styles.deleteTaskButton} onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </div>
  );
}
