import styles from './Dashboard.module.css';
import clipboard from '../assets/clipboard.png'

export function EmptyDashboard() {
  return (
    <div className={styles.emptyBoard}>
      <img src={clipboard} alt="" />
      <div className={styles.emptyBoardMessage}>
        <p>
          <b>Você ainda não tem tarefas cadastradas</b>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}