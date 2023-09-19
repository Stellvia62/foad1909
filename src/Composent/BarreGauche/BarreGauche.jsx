import styles from "./BarreGauche.module.scss"

const BarreGauche = () =>{
    return(
        <>
            <div className={styles.body}>
                <div className={styles.text}><p>Docknotes</p></div>
                <div className={styles.container}>
                    <div className={`${styles.pastille} ${styles.bleu}`}></div>
                    <div className={`${styles.pastille} ${styles.orange}`}></div>
                    <div className={`${styles.pastille} ${styles.rouge}`}></div>
                    <div className={`${styles.pastille} ${styles.vert}`}></div>
                    <div className={`${styles.pastille} ${styles.violet}`}></div>
                </div>

            </div>
        </>
    )
}

export default BarreGauche;