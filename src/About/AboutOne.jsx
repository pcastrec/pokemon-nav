import React from "react"
import { useParams } from "react-router-dom"

// Page about ou je re-effectue un fetch (pas bien)
export const AboutOne = () => {

    // Je peux recuperer l'index car la route defini dans main.jsx est /about/:index index est donc un parametre de l'URL
    const { index } = useParams()
    // Le state pour stocker les données d'un pokemon
    const [pokemon, setPokemon] = React.useState()

    React.useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(res => res.json())
        .then(data => setPokemon(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
        </div>
    )
}