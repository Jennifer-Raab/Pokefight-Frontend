import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";

import useFetch from "./useFetch";

export default function ActionAreaCard() {
  const { id } = useParams();
  const pokemons = useFetch();

  let currentPokemon;

  if (id && pokemons) {
    //id aus useParams muss zur Number umgebaut werden.
    // oder "==" statt "===" verwenden!
    currentPokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));
  }

  return (
    <>
      {currentPokemon && (
        <Card sx={{ maxWidth: 345 }} key={currentPokemon.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`}
              alt={currentPokemon.name.english}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h2>{currentPokemon.name.english}</h2>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>type:</li>
                  <li>{currentPokemon.type[0]},</li>
                  <li>{currentPokemon.type[1]}</li>
                </ul>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ul>
                  <li>HP:{currentPokemon.base.HP}</li>
                  <li>Attack:{currentPokemon.base.Attack}</li>
                  <li>Defense:{currentPokemon.base.Defense}</li>
                  <li>sp Attack:{currentPokemon.base["Sp.Attack"]}</li>
                  <li>sp Defense:{currentPokemon.base["Sp.Defense"]}</li>
                </ul>
              </Typography>
              <Button variant="contained">more Information</Button>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}
