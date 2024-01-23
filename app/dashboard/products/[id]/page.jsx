import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/samsung-galaxy-a32.jpg" alt="" fill />
                </div>
                Samsung Galaxy A32
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>  
                    <label>Título</label>
                    <input type="text" name="title" placeholder="Samsung Galaxy A32" />
                    <label>Precio</label>
                    <input type="number" name="price" placeholder="$4,300.00" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="72" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="Black" />
                    <label>Marca</label>
                    <input type="text" name="brand" placeholder="Samsung" />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="phones">Celulares</option>
                        <option value="audio">Audio</option>
                        <option value="computer">Computadoras</option>
                        <option value="videogames">Videojuegos</option>
                    </select>
                    <label>Descripción</label>
                    <textarea name="desc" id="desc" rows="4" placeholder='Teléfono inteligente'></textarea>
                    <button>Actualizar</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage