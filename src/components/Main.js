import useFetch from "./useFetch";
import PokeCards from "./PokeCards";
import LoadingSpinner from "./LoadingSpinner";

export default function Main() {
  const pokemons = useFetch();

  const checkForPokemons = () => {
    return !pokemons || pokemons.length === 0 ? false : true;
  };
  //   const checkForImages = () => {
  //     return !pokeImages || pokeImages.length === 0 ? false : true;
  //   };
  return (
    <div className="main-container">
      {!checkForPokemons() && (
        <div className="no-data-message">
          <LoadingSpinner />
          <h2>
            Noch sind keine wilden Pokemon aufgetaucht. Suche weiter Trainer!
          </h2>
        </div>
      )}
      {checkForPokemons() && <PokeCards pokemons={pokemons} />}
    </div>
  );
}
