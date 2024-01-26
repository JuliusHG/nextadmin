import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { initializeApp } from "firebase/app";


const UsersPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Buscar usuario..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Agregar nuevo</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Email</td>
                        <td>Creado</td>
                        <td>Rol</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/tb-john.jpg" alt="" width={40} height={40} className={styles.userImage}/> John Lennon
                            </div>
                        </td>
                        <td>lennon@gmail.com</td>
                        <td>15-10-1940</td>
                        <td>Guitar</td>
                        <td>Inactive</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.view}`}>Ver</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/tb-paul.jpg" alt="" width={40} height={40} className={styles.userImage}/> Paul McCartney
                            </div>
                        </td>
                        <td>macca@gmail.com</td>
                        <td>20-06-1942</td>
                        <td>Bass</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/users/test">
                                <button className={`${styles.button} ${styles.view}`}>Ver</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/tb-george.jpg" alt="" width={40} height={40} className={styles.userImage}/> George Harrison
                            </div>
                        </td>
                        <td>george@gmail.com</td>
                        <td>20-01-1943</td>
                        <td>Guitar</td>
                        <td>Inactive</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.view}`}>Ver</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/tb-ringo.jpg" alt="" width={40} height={40} className={styles.userImage}/> Ringo Starr
                            </div>
                        </td>
                        <td>ringo@gmail.com</td>
                        <td>8-02-1940</td>
                        <td>Drums</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.view}`}>Ver</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default UsersPage