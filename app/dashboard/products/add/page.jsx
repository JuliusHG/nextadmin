import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Título' name='title' required />
                <select name="cat" id="cat">
                    <option value="general">Elige categoría</option>
                    <option value="audio">Audio</option>
                    <option value="computer">Computadoras</option>
                    <option value="videogames">Videojuegos</option>
                    <option value="phones">Celulares</option>
                </select>
                <input type="number" placeholder='Precio' name='price' required />
                <input type="number" placeholder='Stock' name='stock' required />
                <input type="text" placeholder='Color' name='color' required />
                <input type="text" placeholder='Marca' name='brand' required />
                <textarea name="desc" id="desc" rows="16" placeholder='Descripción'></textarea>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default AddProductPage