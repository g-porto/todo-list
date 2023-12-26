import { Header } from "./components/Header";
import { Input } from "./components/Input";

import "./global.css";
import styles from "./App.module.css";
import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Input />
        <Dashboard />
      </div>
    </div>
  );
}
