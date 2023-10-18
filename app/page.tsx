import Canvas from './components/Canvas'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <Canvas data={{ pt: { reserve: { lihi: 30, noga: 100, total: 130 }, sadir: { lihi: 30, noga: 100, total: 130, } }, js: { reserve: {}, sadir: { lihi: 50, noga: 34, total: 84 } }, hf: { reserve: { lihi: 30, noga: 100, total: 130 }, sadir: { lihi: 30, noga: 100, total: 130 } } }} />
    </main>
  )
}
