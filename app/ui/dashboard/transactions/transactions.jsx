import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Últimas Transacciones</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Status</td>
                        <td>Fecha</td>
                        <td>Monto</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/tb-john.jpg" alt="" width={40} height={40} className={styles.userImage}/> John Lennon
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pendiente</span>
                        </td>
                        <td>14-02-24</td>
                        <td>$3,500</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/tb-paul.jpg" alt="" width={40} height={40} className={styles.userImage}/> Paul McCartney
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Realizado</span>
                        </td>
                        <td>14-02-24</td>
                        <td>$3,500</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/tb-george.jpg" alt="" width={40} height={40} className={styles.userImage}/> George Harrison
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelado</span>
                        </td>
                        <td>14-02-24</td>
                        <td>$3,500</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/tb-ringo.jpg" alt="" width={40} height={40} className={styles.userImage}/> Ringo Starr
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pendiente</span>
                        </td>
                        <td>14-02-24</td>
                        <td>$3,500</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Transactions