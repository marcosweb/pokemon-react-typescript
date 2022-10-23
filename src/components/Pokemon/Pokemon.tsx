import { useEffect, useState, ReactElement } from 'react';
import ReactLoading from "react-loading";
import { Col } from "react-bootstrap";

import { 
    SinglePokemon, 
    PokemonDetails, 
    apiDataDetail 
} from '../../interfaces/Pokemon.inteface';

import { getPokemonDetail } from '../../services/pokemon.service';

import './Pokemon.sass';

interface IProps {
    pokemon: SinglePokemon,
    handleClick(pokemonDetails: PokemonDetails): void
}

export default function Pokemon({ pokemon, handleClick }: IProps): ReactElement {

    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();

    useEffect(() => {
        getPokemonDetail(pokemon.url).then((resp: apiDataDetail) => {
            setPokemonDetails(resp.data);
        });
      }, [pokemon]);

    const image = !pokemonDetails ? (
        <ReactLoading type="spin" color="#fff" width={"100%"} />
    ) : (
        <img src={pokemonDetails?.sprites?.front_default} alt="Imagem Pokemon" />
    );

    return (
        <>
        {pokemonDetails && <Col sm={12} md={6} lg={6} xl={4} xxl={3} 
            onClick={() => handleClick(pokemonDetails)} 
            className='PokemonItemContainer'>
          <div className='CardItem'>
            <div className='CardImage'>{image}</div>
            <div className='CardInfo'>{pokemon.name}</div>
          </div>
        </Col>}
        </>
      );
}