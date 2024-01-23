import Image from 'next/image';
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🔔 Disponible Ya</span>
                    <h3 className={styles.title}>¿Cómo usar la nueva versión?</h3>
                    <span className={styles.subtitle}>Tiempo de lectura: 4 min</span>
                    <p className={styles.desc}>Entérate de las nuevas características que tenemos para ti.</p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg} />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🍼 ¡Viniéndose pronto!</span>
                    <h3 className={styles.title}>¡Nueva versión onanista disponible, pronto podrás venirte a gusto!</h3>
                    <span className={styles.subtitle}>Aumenta tu producción láctea</span>
                    <p className={styles.desc}>Nunca encontrarás mejor material para venirte sin prisas y sin compromisos.</p>
                    <button className={styles.button}>
                        <MdReadMore/>
                        Vente
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar