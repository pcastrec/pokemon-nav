import { useLocation } from "react-router-dom"

// Composant qui recupere les données par le state du Link
export const AboutTwo = () => {

    // Je recupere les données envoye par le Link
    const { state } = useLocation()

    return (
        <div>
            <h2>{state.pokemon.name}</h2>
            <img src={state.pokemon.sprites.front_default} alt={state.pokemon.name} />
        </div>
    )
}