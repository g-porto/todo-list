import styles from "./Stats.module.css";

export function Stats() {
  return (
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
  );
}
