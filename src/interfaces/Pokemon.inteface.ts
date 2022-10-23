export interface SinglePokemon {
    name: string,
    url: string
}

export interface PokemonData {
    count: number,
    next: string | null,
    previous: string | null,
    results: SinglePokemon[]
}

export interface INameUrl {
    name: string,
    url: string
}

// Abilities

export interface IAbilitiesItem {
    ability: INameUrl,
}

export type IAbilities = IAbilitiesItem[]

// Moves

export interface IMoves {
    move: INameUrl
}

export type IMovesItem = IMoves[]

// Detalhes do Pokemon

export interface PokemonDetails {
    abilities: IAbilities,
    id: number,
    moves: IMovesItem,
    name: string,
    sprites: any,
}

// Retorno da API

export interface apiData {
    data: PokemonData,
}

// Retorno da API com detalhes do pokemon

export interface apiDataDetail {
    data: PokemonDetails,
}
