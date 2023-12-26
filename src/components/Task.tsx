import { Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.taskWrapper}>
      <button title="Marcar como completa" className={styles.taskRadio}>
        <Circle size={24} />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button title="Excluir tarefa" className={styles.deleteTaskButton}>
        <Trash size={14} />
      </button>
    </div>
  );
}
