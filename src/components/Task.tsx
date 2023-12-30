import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  description: string,
  completed: boolean
}

export function Task({description, completed}: TaskProps) {
  function handleTaskStatusToggle() {
    if(completed) {
      console.log('completed')
    }
  }

  return (
    <div className={styles.taskWrapper}>
      <button title="Marcar como completa" onClick={handleTaskStatusToggle} className={styles.taskRadio}>
        {completed ? <CheckCircle size={17.5} weight="fill" /> : <Circle size={17.5} />}
      </button>
      <p className={`${completed ? 'completed' : ''}`}>
        {description}
      </p>
      <button title="Excluir tarefa" className={styles.deleteTaskButton}>
        <Trash size={14} />
      </button>
    </div>
  );
}
