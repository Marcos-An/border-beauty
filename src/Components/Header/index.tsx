import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.tittle}>
        <span> Border </span>
        <span> Beauty. </span>
      </h1>
    </header>
  )
}