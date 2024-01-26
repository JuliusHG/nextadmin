"use client"
import FirebaseConfig from "../FirebaseConfig/FirebaseConfig";
import {ref, set, get, update, remove, child} from "firebase/database";
import { useState } from "react";
import styles from './FirebaseCrud.module.css'

const database = FirebaseConfig();
const dbref = ref(database);

function FirebaseCrud() {
    let [username, setUsername] = useState('');
    let [fullname, setFullName] = useState('');
    let [phone, setPhone] = useState('');
    let [dob, setDob] = useState('');

    let isNullorWhiteSpaces = value => {
        value = value.toString();
        return (value == null || value.replaceAll('  ', '').lenght < 1);
    }

    let InsertData = () => {
        if (
            isNullorWhiteSpaces(username)
            || isNullorWhiteSpaces(fullname)
            || isNullorWhiteSpaces(phone)
            || isNullorWhiteSpaces(dob)
        ) {
            alert("Por favor llene todos los campos");
            return;
        }

        get(child(dbref, 'Customer/' + username)).then(snapshot=>{

            if (snapshot.exists()){
                alert("Este nombre de usuario ya existe.")
            }

            else {
                set(ref(database, 'Customer/'+ username),{
                    fullname: fullname,
                    phonenumber: phone,
                    dateofbirth: dob
                }).then(()=>{
                    alert("Usuario agregado exitosamente.")
                })
                .catch(error =>{
                    console.log(error);
                    alert("Ocurrió un error al agregar el usuario");
                });;
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("La obtención de datos de error no fue exitosa.");
        })
    }

    let UpdateData = () => {
        if (
            isNullorWhiteSpaces(username)) {
            alert("El nombre del usuario está vacío, intente seleccionar primero un usuario con el botón de Seleccionar");
            return;
        }

        get(child(dbref, 'Customer/' + username)).then(snapshot=>{

            if (snapshot.exists()){
                update(ref(database, 'Customer/'+ username),{
                    fullname: fullname,
                    phonenumber: phone,
                    dateofbirth: dob
                }).then(()=>{
                    alert("Usuario actualizado exitosamente.")
                })
                .catch(error =>{
                    console.log(error);
                    alert("Ocurrió un error al actualizar el usuario");
                });;
            }

            else {
                alert("Error: el usuario existe.");
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("La obtención de datos de error no fue exitosa.");
        })
    }

    let DeleteData = () => {
        if (
            isNullorWhiteSpaces(username)) {
            alert("Nombre de usuario es requerido para borrar un usuario");
        }

        get(child(dbref, 'Customer/' + username)).then(snapshot=>{

            if (snapshot.exists()){
                remove(ref(database, 'Customer/'+ username))
                .then(()=>{
                    alert("Usuario borrado exitosamente.")
                })
                .catch(error =>{
                    console.log(error);
                    alert("Ocurrió un error al eliminar el usuario");
                });
            }

            else {
                alert("Error: el usuario existe.");
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("La obtención de datos de error no fue exitosa.");
        })
    }

    let SelectData = () =>{
        const dbref = ref(database);

        if (
            isNullorWhiteSpaces(username)
        ) {
            alert("El nombre de usuario es requerido para obtener los datos.");
            return;
        }

        get(child(dbref, 'Customer/' + username)).then(snapshot=>{
            if (snapshot.exists()){
                setFullName(snapshot.val().fullname);
                setPhone(snapshot.val().phonenumber);
                setDob(snapshot.val().dateofbirth);
            }

            else {
                alert("No hay datos disponibles")
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("La obtención de datos de error no fue exitosa.");
        })
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.thebox}>
                <div className={styles.aform}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={username} onChange={e=>{setUsername(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Full Name</label>
                        <input type="text" value={fullname} onChange={e=>{setFullName(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type="text" value={phone} onChange={e=>{setPhone(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input type="text" value={dob} onChange={e=>{setDob(e.target.value)}}/>
                    </div>
                </div>
                <div className={styles.abuttons}>
                   <button onClick={InsertData} className={styles.button}>Insertar Datos</button>
                  <button onClick={UpdateData} className={styles.button}>Actualizar Datos</button>
                  <button onClick={DeleteData} className={styles.button}>Eliminar Datos</button>
                  <button onClick={SelectData} className={styles.button}>Seleccionar Datos</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default FirebaseCrud;