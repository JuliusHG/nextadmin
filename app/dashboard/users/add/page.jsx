import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Nombre de usuario' name='username' required />
                <input type="email" placeholder='Correo electrónico' name='email' required />
                <input type="password" placeholder='Contraseña' name='password' required />
                <input type="phone" placeholder='Teléfono' name='phone' />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>¿Es Admin?</option>
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>¿Activo?</option>
                    <option value={true}>Sí</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address" rows="16" placeholder='Domicilio'></textarea>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default AddUserPage