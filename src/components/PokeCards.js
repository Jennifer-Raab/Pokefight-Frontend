import { Link, useNavigate } from "react-router-dom";
import "./PokeCards.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";

function PokeCards({ pokemons }) {
  const navigation = useNavigate();
  console.log(pokemons);
  return (
    <>
      <Grid container spacing={2}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => (
            <Grid item xs={3}>
              {/* <Link to={}> */}
              <Card sx={{ maxWidth: 345 }} key={pokemon.id}>
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
                          <ul>
                            <li>Attack: {pokemon.base.Attack}</li>
                            <li>Defense: {pokemon.base.Defense}</li>
                          </ul>
                          {/* <ul>
                          <li>type:</li>
                          <li>{pokemon.type[0]},</li>
                          <li>{pokemon.type[1]}</li>
                        </ul> */}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary">
                          <ul>
                            <li>Sp.Attack: {pokemon.base.Sp[" Attack"]}</li>
                            <li>Defense: {pokemon.base.Sp[" Defense"]}</li>
                          </ul>
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
