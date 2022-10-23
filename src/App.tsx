import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactLoading from "react-loading";

import { apiData, PokemonData, PokemonDetails } from './interfaces/Pokemon.inteface';
import { getPokemon } from './services/pokemon.service';

import Pokemon from "./components/Pokemon/Pokemon";
import { Detail } from "./components/Detail/Detail";
import { Paginate } from "./components/Paginate/Paginate";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

function App() {
  const [pokemon, setPokemon] = useState<PokemonData>();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonDetails>();

  // Detalhes do Pokemon
  function clickPokemon(pokemonDetail: PokemonDetails): void {
    setPokemonInfo(pokemonDetail);
  }

  useEffect(():void => get(), [])

  function get(url?: string):void {
    getPokemon(url).then((resp: apiData) => setPokemon(resp.data))
  }

if (!pokemon) return (
    <ReactLoading type="spin" color="#fff" width={"20%"} />
)

  return (
    <Container>
      <Row>
        <Col md={9}>
          <Row>
            {pokemon?.results?.map((item) => {
              return (
                <Pokemon
                  pokemon={item}
                  handleClick={clickPokemon}
                  key={item.name}
                />
              );
            })}
          </Row>
          <Paginate 
            next={pokemon.next} 
            prev={pokemon.previous} 
            handleClick={get} 
          />
        </Col>

        <Col md={3}>
          <Row>
            <div className="ShowInfo">
                {pokemonInfo && <Detail pokemon={pokemonInfo} />}
            </div>
          </Row>
        </Col>

      </Row>
    </Container>
  );
}

export default App;