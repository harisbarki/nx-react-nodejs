import styles from './app.module.scss';
import {Header, PrimeMedian} from '@boilerplate/frontend/ui';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <PrimeMedian />
      </main>
    </div>
  );
}

export default App;
