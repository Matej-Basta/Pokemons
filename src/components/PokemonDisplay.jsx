import React, {useState, useEffect} from "react";
import {Pokemon} from "./Pokemon.jsx";

export function PokemonDisplay() {

    const [pokemons, setPokemons] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [offset, setOffset] = useState(0);

    const loadData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=5");
        const data = await response.json();

        data && setPokemons(data.results);
        setDataLoaded(true);
        console.log(offset);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>  
            <button onClick={() => {setOffset(Math.floor(Math.random() * 101)); loadData()}}>Random pokemons</button>
            {!dataLoaded ? 
            <p>Loading</p> :
            pokemons.map((pokemon, index) => {
                return <Pokemon key={index} pokemon={pokemon} />
            })
            }
            
        </>
    );
}