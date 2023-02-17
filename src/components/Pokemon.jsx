import React from "react"
import { Link } from "react-router-dom"
import styles from '../Home/Home.module.css'

// Composant qui affiche un pokemon
export const Pokemon = ({ item }) => {

    // Le state pour stocker les informations du pokemon
    const [pokemon, setPokemon] = React.useState()

    // MA requete pour recuperer les informations du pokemon
    React.useEffect(() => {
        fetch(item.url)
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.error(err))
    }, [])

    // Je  creer le lien pour naviguer sur ma page about en donnant l'index du pokemon cliquer
    // Je peux passer des données dans le Link avec la propriete state
    return (
        <Link to={`/about/${pokemon?.id}`} state={{ pokemon }} className={styles.card}>
            <h2>#{pokemon?.id}</h2>
            <img src={pokemon?.sprites.front_default} />
        </Link>
    )
}