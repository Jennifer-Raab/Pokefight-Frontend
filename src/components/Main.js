import useFetch from "./useFetch";
import PokeCards from "./PokeCards";
import LoadingSpinner from "./LoadingSpinner";
import "./main.css";
import { Box } from "@mui/material";
// import CardContainer from "./CardCotainer";

export default function Main() {
  const pokemons = useFetch();
  console.log(pokemons);

  const checkForPokemons = () => {
    return !pokemons || pokemons.length === 0 ? false : true;
  };

  //   const checkForImages = () => {
  //     return !pokeImages || pokeImages.length === 0 ? false : true;
  //   };
  return (
    <Box sx={{ display: "flex" }}>
      <div className="main-container sx={{ display: 'flex' }}">
        {!checkForPokemons() && (
          <div className="no-data-message">
            <LoadingSpinner />
            <h2>
              Noch sind keine wilden Pokemon aufgetaucht. Suche weiter Trainer!
            </h2>
          </div>
        )}
        {/* <CardContainer /> */}
        {checkForPokemons() && <PokeCards pokemons={pokemons.slice(0, 151)} />}
      </div>
    </Box>
  );
}
