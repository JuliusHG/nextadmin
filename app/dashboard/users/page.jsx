"use client"

import { useState, useEffect } from "react";
import { format } from "date-fns";
import FirebaseConfig from "@/app/FirebaseConfig/FirebaseConfig";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { ref, onValue } from "firebase/database";

const database = FirebaseConfig();
const dbRef = ref(database, "users");

const UsersPage = () => {
  // Declare state variables
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalItems, setTotalItems] = useState(0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentUsers, setCurrentUsers] = useState([]);

  // Fetch users data from the firebase realtime database and update state variables
  useEffect(() => {
    const fetchData = async () => {
      onValue(
        dbRef,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setUsers(Object.values(data));
            setTotalItems(Object.keys(data).length);
          } else {
            setUsers([]);
            setTotalItems(0);
          }
        },
        {
          orderByChild: "email",
        }
      );
    };

    fetchData();
  }, [currentPage, database, itemsPerPage]);

  // Update currentUsers state variable based on currentPage and itemsPerPage
  useEffect(() => {
    const sortedUsers = users.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    setCurrentUsers(users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
  }, [users, currentPage, itemsPerPage]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar usuario..." />
        <div className={styles.sort}>
          <span>(WIP) Ordenar por&nbsp;</span>
          <Link href={`/dashboard/users?sort=name`} shallow legacyBehavior>
            <a>Nombre</a>
          </Link>
          <span>&nbsp;|&nbsp;</span>
          <Link href={`/dashboard/users?sort=email`} shallow legacyBehavior>
            <a>Email</a>
          </Link>
          <span>&nbsp;|&nbsp;</span>
          <Link href={`/dashboard/users?sort=createdAt`} shallow legacyBehavior>
            <a>Fecha</a>
          </Link>
        </div>
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
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />{" "}
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{format(new Date(user.createdAt), "dd-MM-yyyy")}</td>
              <td>{user.isAdmin ? "Admin" : ""}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>Ver</button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default UsersPage;