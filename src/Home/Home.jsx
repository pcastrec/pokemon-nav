import React from "react"
import { Pokemon } from "../components/Pokemon"
import styles from './Home.module.css'

// Je recupere les pokemons et je les  affiches
export const Home = () => {

    // Le state pour récupérer/stocker la liste des pokemons
    const [pokemons, setPokemons] = React.useState([])

    // Ma requete pour recuperer les informations des pokemons
    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => setPokemons(data.results))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className={styles.container}>
            {/* Lorsque j'utlise un map, je dois donner une propriete key a l'enfant que j'affiche */}
            {/* J'affiche chacun des pokemon */}
            {pokemons.map(item => <Pokemon key={item.name} item={item} />)}
        </div>
    )
}