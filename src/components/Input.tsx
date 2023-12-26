import { PlusCircle } from "phosphor-react";

import styles from "./Input.module.css";

export function Input() {
  return (
    <div className={styles.taskInputGroup}>
      <form className={styles.taskInputForm}>
        <input
          className={styles.taskInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
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
  );
}
