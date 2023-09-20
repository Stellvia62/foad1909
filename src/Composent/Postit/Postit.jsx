import styles from "./Postit.scss"

const Postit = (couleur) =>{
    return(
        <>
            <div className={`${carre} ${couleur.couleur}`}>

            </div>
        </>
    )
}

export default Postit;