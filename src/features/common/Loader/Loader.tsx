import styles from "./Loader.module.scss"

export const Loader  = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p className={`${styles.text} header_link`}>Cargando...</p>
        </div>
    )
}