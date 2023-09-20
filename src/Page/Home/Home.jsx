import { useState } from "react"
import styles from "./Home.module.scss"
import BarreGauche from "../../Composent/BarreGauche/BarreGauche"
import Postit from "../../Composent/Postit/Postit"

const Home = () =>{

    return(
        <>
        <div className={styles.page}>
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
            <div className={styles.corps}>
                <div className={styles.recherche}>
                    <input type="seach" placeholder="Seach"/>
                </div>
                <div className={styles.titre}>
                    <p>Notes</p>
                </div>
                <div className={styles.postit}>

                </div>
            </div>
         </div>
        </>
    )
}

export default Home;