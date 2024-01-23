import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const singleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/tb-paul.jpg" alt="" fill />
                </div>
                Paul McCartney
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>  
                    <label>Nombre de Usuario</label>
                    <input type="text" name="username" placeholder="Paul McCartney" />
                    <label>Correo Electrónico</label>
                    <input type="email" name="email" placeholder="macca@gmail.com" />
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="thrillington" />
                    <label>Teléfono</label>
                    <input type="phone" name="phone" placeholder="+529612448224" />
                    <label>Dirección</label>
                    <textarea type="text" name="address" placeholder="Mull of Kyntire" />
                    <label>¿Es admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                    </select>
                    <label>¿Activo?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Sí</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Actualizar</button>
                </form>
            </div>
        </div>
    );
};

export default singleUserPage