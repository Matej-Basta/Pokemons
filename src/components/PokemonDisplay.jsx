import React, {useState, useEffect} from "react";

export function PokemonDisplay() {

    const [data, setData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);

    const loadData = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5");
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <p>sth</p>
        </>
    );
}