import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Buscar producto..." />
                <Link href="/dashboard/products/add">
                <button className={styles.addButton}>Agregar nuevo</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Título</td>
                        <td>Descripción</td>
                        <td>Precio</td>
                        <td>Creado</td>
                        <td>Stock</td>
                        <td>Acción</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                            <Image src="/samsung-galaxy-a32.jpg" alt="" width={40} height={40} className={styles.productImage}/> Samsung Galaxy A32
                            </div>
                            
                        </td>
                        <td>Celular</td>
                        <td>$4,300</td>
                        <td>3-01-2024</td>
                        <td>72</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/products/samsung-galaxy-a32">
                                <button className={`${styles.button} ${styles.view}`}>Ver</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.product}>
                            <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/> Sonos Soundbar
                            </div>
                        </td>
                        <td>Barra de sonido</td>
                        <td>$6,500</td>
                        <td>12-01-2024</td>
                        <td>34</td>
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
                            <div className={styles.product}>
                            <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/> Lenovo Laptop
                            </div>
                        </td>
                        <td>PC Laptop</td>
                        <td>$9,800</td>
                        <td>14-01-2024</td>
                        <td>25</td>
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
                            <div className={styles.product}>
                            <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}/> Nintendo Switch
                            </div>
                        </td>
                        <td>Consola de juegos</td>
                        <td>$8,800</td>
                        <td>15-01-2024</td>
                        <td>13</td>
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

export default ProductsPage