import styles from '@/app/ui/login/login.module.css'

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1>Acceder</h1>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button>Acceder</button>
            </form>
        </div>
    )
}

export default LoginPage