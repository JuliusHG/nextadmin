import styles from '../footer/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>👽 Coded by <span className={styles.ornname}>julius 🧔🏻</span> with a little help from <span className={styles.ornname2}>Lama Dev</span></div>
            <div className={styles.text}>© Todos los derechos reservados.</div>
        </div>
    )
}

export default Footer