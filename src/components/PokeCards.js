import { Link, useNavigate } from "react-router-dom";
import "./PokeCards.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  CardActions,
  Grid,
  Item,
  spacing,
} from "@mui/material";

function PokeCards({ pokemons }) {
  const navigation = useNavigate();
  const pokelength = pokemons.length === 1 ? 6 : 3;
  console.log(pokemons);
  return (
    <>
      <Grid container spacing={1}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <Grid item xs={pokelength}>
              {/* <Link to={}> */}
              <Card sx={{ maxWidth: 320, mt: 3 }} key={pokemon.id}>
                <CardActionArea
                  onClick={() => navigation(`/detail/${pokemon.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.name.english}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="div">
                          <h2>{pokemon.name.english}</h2>
                        </Typography>
                        <p>Type:</p>
                        {pokemon.type.map((type) => (
                          <span>{type} </span>
                        ))}
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          <p>Attack: {pokemon.base.Attack}</p>
                          <p>Defense: {pokemon.base.Defense}</p>
                          {/* <ul>
                          <li>type:</li>
                          <li>{pokemon.type[0]},</li>
                          <li>{pokemon.type[1]}</li>
                        </ul> */}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          <p>Sp.Attack: {pokemon.base.Sp[" Attack"]}</p>
                          <p>Sp.Defense: {pokemon.base.Sp[" Defense"]}</p>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  {/* <CardActions>
                    <Button variant="contained">more Information</Button>
                  </CardActions> */}
                </CardActionArea>
              </Card>
              {/* </Link> */}
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default PokeCards;
