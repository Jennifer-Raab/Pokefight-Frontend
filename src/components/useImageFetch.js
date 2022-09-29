import { useEffect, useState } from "react";

function useImageFetch() {
  const [pokeImage, setPokeImage] = useState([]);

  useEffect(() => {
    getPokeImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPokeImages() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=809&offset=0"
      );
      const data = await response.json();
      console.log(data);
      setPokeImage(data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  return pokeImage;
}
export default useImageFetch;
