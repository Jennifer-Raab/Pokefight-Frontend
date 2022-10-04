import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  CardActions,
} from "@mui/material";

function PokeCards({ pokemons }) {
  return (
    <>
      {pokemons.length > 0 &&
        pokemons.map((pokemon) => (
          <Link to={`/detail/${pokemon.id}`}>
            <Card sx={{ maxWidth: 345 }} key={pokemon.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name.english}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h2>{pokemon.name.english}</h2>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <ul>
                      <li>type:</li>
                      <li>{pokemon.type[0]},</li>
                      <li>{pokemon.type[1]}</li>
                    </ul>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <ul>
                      <li>HP:{pokemon.base.HP}</li>
                      <li>Attack:{pokemon.base.Attack}</li>
                      <li>Defense:{pokemon.base.Defense}</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained">more Information</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Link>
        ))}
    </>
  );
}

export default PokeCards;
