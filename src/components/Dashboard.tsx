import { Stats } from "./Stats";
import { TaskList } from "./TaskList";

import styles from "./Dashboard.module.css";

export function Dashboard() {
  return (
    <div className={styles.dashboardWrapper}>
      <Stats />
      <TaskList />
    </div>
  );
}
