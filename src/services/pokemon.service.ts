import axios from "axios";
import { apiData, apiDataDetail } from '../interfaces/Pokemon.inteface';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export function getPokemon(url?: string):Promise<apiData> {
    return axios.get(url || baseUrl);
}

export function getPokemonDetail(url:string):Promise<apiDataDetail> {
    return axios.get(url);
}