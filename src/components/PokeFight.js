import useFetch from "./useFetch";
import { useState } from "react";
import PokeCards from "./PokeCards";
import "./PokeFight.css";
import { Grid } from "@mui/material";

function PokeFight() {
  const [firstPokemon, setFirstPokemon] = useState();
  const [secondPokemon, setSecondPokemon] = useState();
  const pokemons = useFetch();
  console.log(pokemons);
  const randomPokemon = (pokemons) => {
    let randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    console.log("ich bin randomPokemon" + randomPokemon);
    return randomPokemon;
  };

  console.log(firstPokemon);
  console.log(secondPokemon);

  function fight() {
    if (firstPokemon.base.HP > secondPokemon.base.HP) {
      setSecondPokemon("");
      return `<h1>Sieger</h1>`;
    } else {
      setFirstPokemon("");
      return `<h1>Sieger</h1>`;
    }
  }

  return (
    <div className="pokeFight-Container">
      <button
        className="PokeButton"
        onClick={() => setFirstPokemon(randomPokemon(pokemons))}
      >
        choose Pokemon 1
      </button>
      <button className="PokeButton" onClick={() => fight()}>
        Fight
      </button>
      <button
        className="PokeButton"
        onClick={() => setSecondPokemon(randomPokemon(pokemons))}
      >
        choose Pokemon 2
      </button>
      <Grid container>
        <Grid item xs={6}>
          {firstPokemon && <PokeCards pokemons={[firstPokemon]} />}
        </Grid>
        <Grid item xs={6}>
          {secondPokemon && <PokeCards pokemons={[secondPokemon]} />}
        </Grid>
      </Grid>
    </div>
  );
}

export default PokeFight;
