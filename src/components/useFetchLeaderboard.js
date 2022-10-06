import { useEffect, useState } from "react";

function useFetch() {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPokemons() {
    try {
      const response = await fetch("http://localhost:8080/leaderboard");
      if (!response.ok) {
        throw new Error(`Fetch failed with a status of ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setLeaderBoard(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return leaderBoard;
}
export default useFetch;
