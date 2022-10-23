import { Form } from "react-bootstrap";
import { PokemonDetails } from "../../interfaces/Pokemon.inteface";

import "./Detail.sass";

interface IProps {
    pokemon: PokemonDetails
}

export function Detail({ pokemon }: IProps) {
  const imgUrl = pokemon?.sprites?.other?.dream_world?.front_default;

  if (!pokemon) return <></>;

  return (
    <>
      <div className="ImageShowPokemon">
        <img src={imgUrl} alt="imagem pokemon" />
      </div>
      <div className="NamePokemon">
        <h1>{pokemon?.name}</h1>
      </div>
      <div className="AbilitiesPokemon">
        <p>Habilidades:</p>
        {pokemon?.abilities?.map((item) => {
            const { name } = item?.ability;
            return <div key={name}> {name} </div>;
        })}
      </div>

      <div className="MovesPokemon">
        <SelectBasicExample />
      </div>
    </>
  );

  function SelectBasicExample() {
    return (
      <Form.Select aria-label="Movimentos" size="lg" className="Moves">
        <option>↓ Movimentos ↓</option>
        {pokemon?.moves?.map((item) => {
          const selectMoves = item?.move?.name;
          return (
            <option value={selectMoves} key={selectMoves}>
              {selectMoves}
            </option>
          );
        })}
      </Form.Select>
    );
  }
}