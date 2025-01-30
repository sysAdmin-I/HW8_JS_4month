import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../components/pagination/Pagination";
import PokemonCardPage from "../../pages/pokemonCardPage/PokemonCardPage";
import classes from "./PokemonPage.module.scss";

const BASE_URL = "http://localhost:5001/results";
const limit = 12;

const PokemonPage = () => {
    const [pokemon, setPokemon] = useState([]);
    const [offset, setOffset] = useState(0);
    const page = offset / limit + 1;

    const getPokemon = async () => {
        const response = await axios.get(`${BASE_URL}?_limit=${limit}&_start=${offset}`);
        setPokemon(response.data);
    };

    useEffect(() => {
        getPokemon();
    }, [offset]);

    const handlePrev = () => {
        if (offset > 0) {setOffset((prev) => prev - limit);}
    };

    const handleNext = () => {
        setOffset((prev) => prev + limit);
    };

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.titleBlock}>
                    <h2 className={classes.mainTitle}>Pokemon</h2>
                </div>
                <div className={classes.mainBlock}>
                    {pokemon.map((pokemon) => (
                        <PokemonCardPage key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                    ))}
                </div>
                <Pagination prev={handlePrev} page={page} next={handleNext} />
            </div>
        </>
    );
};

export default PokemonPage;
