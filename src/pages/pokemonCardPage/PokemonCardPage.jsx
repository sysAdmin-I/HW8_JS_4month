import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./PokemonCardPage.module.scss";

const PokemonCardPage = ({ name, url }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios.get(url).then((res) => setDetails(res.data));
    }, [url]);

    return (
        <div className={classes.pokemonCard}>
            <img src={details?.sprites?.other?.dream_world?.front_default || "/placeholder.png"}
                 alt={name} className={classes.pokemonCardImage}/>
            <h2 className={classes.pokemonTitle}>{name}</h2>
            <button className={classes.pokemonDetailBtn}>Подробнее</button>
        </div>
    );
};

export default PokemonCardPage;
