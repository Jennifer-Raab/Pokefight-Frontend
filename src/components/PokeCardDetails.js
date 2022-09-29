import { useParams } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useFetch from "./useFetch";
import Button from "@mui/material/Button";

export default function ActionAreaCard() {
  const { id } = useParams();
  const pokemons = useFetch();

  const currentPokemon = pokemons?.find((pokemon) => id === pokemon.id);
  if (pokemons) {
    console.log("Ich bin Pokemons" + pokemons[0]);
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
