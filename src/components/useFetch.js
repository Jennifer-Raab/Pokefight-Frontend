import { useEffect, useState } from "react";

function useFetch() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPokemons() {
    try {
      const response = await fetch("http://localhost:8080/pokemons");
      if (!response.ok) {
        throw new Error(`Fetch failed with a status of ${response.status}`);
      }
      const data = await response.json();
      setPokemons(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return pokemons;
}
export default useFetch;
