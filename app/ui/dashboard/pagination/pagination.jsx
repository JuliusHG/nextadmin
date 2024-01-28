import styles from './pagination.module.css'

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    return (
        <div className={styles.container}>
      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
    )
}

export default Pagination