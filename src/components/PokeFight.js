import useFetch from "./useFetch";
import { useState } from "react";
import PokeCards from "./PokeCards";
import "./PokeFight.css";
import Music from "./Music";

function PokeFight() {
  const [firstPokemon, setFirstPokemon] = useState();
  const [secondPokemon, setSecondPokemon] = useState();
  const [winnerPokemon, setWinnerPokemon] = useState();
  const pokemons = useFetch();

  const randomPokemon = (pokemons) => {
    let randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    return randomPokemon;
  };

  console.log(winnerPokemon);

  const data = {
    wins: 1,
  };
  function Post(winnerPokemon) {
    fetch("http://localhost:8080/leaderboard", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(winnerPokemon),
    })
      // .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => console.log(data));
  }
  function fight() {
    Music();
    if (firstPokemon.base.HP > secondPokemon.base.HP) {
      setSecondPokemon("");
      setWinnerPokemon(firstPokemon);
      data.id = firstPokemon.id;
      data.name = firstPokemon.name.english;
      Post(data);
      // return `<h1>Sieger</h1>`;
    } else {
      setFirstPokemon("");
      setWinnerPokemon(secondPokemon);
      data.id = secondPokemon.id;
      data.name = secondPokemon.name.english;
      Post(data);
      // return `<h1>Sieger</h1>`;
    }
  }

  return (
    <div className="pokeFight-Container">
      <button onClick={() => setFirstPokemon(randomPokemon(pokemons))}>
        choose Pokemon 1
      </button>
      <button onClick={() => fight()}>Fight</button>
      <button onClick={() => setSecondPokemon(randomPokemon(pokemons))}>
        choose Pokemon 2
      </button>
      {firstPokemon && <PokeCards pokemons={[firstPokemon]} />}
      {secondPokemon && <PokeCards pokemons={[secondPokemon]} />}
    </div>
  );
}

export default PokeFight;
