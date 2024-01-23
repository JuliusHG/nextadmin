import styles from './sidebar.module.css'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image';

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutileSettings,
    MdHelpCenter,
    MdLogout,
    MdOutlineSettings,
} from "react-icons/md";

const menuItems = [
    {
        title: "Páginas",
        list: [
            {
                title: "Panel",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Usuarios",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Productos",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transacciones",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />,
            },
        ]
    },
    {
        title: "Analíticas",
        list: [
            {
                title: "Ingresos",
                path: "/dashboard/revenue",
                icon: <MdWork />,
            },
            {
                title: "Reportes",
                path: "/dashboard/reports",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Equipos",
                path: "/dashboard/teams",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "Usuario",
        list: [
            {
                title: "Configuración",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Ayuda",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/julius-avatar.jpg" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Julius</span>
                    <span className={styles.userTitle}>Administrador</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(
                            item=>(
                                <MenuLink item={item} key={item.title}/>
                            )
                        )}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Salir
            </button>
        </div>
    );
};

export default Sidebar;