import React, {useState} from "react";

export function Pokemon({pokemon}) {

    const {name, url} = pokemon;

    const [details, setDetails] = useState(null);
    const [detailsLoaded, setDetailsLoaded] = useState(false);

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        data && setDetails(data);
        toggle();
    }

    const toggle = () => {
        detailsLoaded ? setDetailsLoaded(false) : setDetailsLoaded(true);
    }

    return (
        <>
            <h3 onClick={() => {loadData()}}>{name}</h3>
            {detailsLoaded ?
            <ul>
                <li>Experience: {details.base_experience}</li>
                <li>Height: {details.height}</li>
                <li>Weight: {details.weight}</li>
            </ul> :
            null
            }
        </>
    );
}