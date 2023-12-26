import styles from "./TaskList.module.css";
// import clipboard from "../assets/clipboard.png";
import { Task } from "./Task";

export function TaskList() {
  return (
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
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
