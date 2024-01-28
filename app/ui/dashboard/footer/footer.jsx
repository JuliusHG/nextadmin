import styles from '../footer/footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>👽 Coded by <span className={styles.ornname}>julius 🧔🏻</span> Designed with a little help from <span className={styles.ornname2}>Lama Dev</span> & <span className={styles.ornname2}>Blackbox/GPT AIs</span></div>
            <div className={styles.text}>© <span className={styles.ornname3}>juliusoft</span> Todos los derechos reservados.</div>
        </div>
    )
}

export default Footer