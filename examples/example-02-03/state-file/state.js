import {fetch} from 'cross-fetch';

export default async ({params}) => {
  if (!params.number) {
    return null;
  }

  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.number}`);
  const pokemonResponseBody = await pokemonResponse.json();

  return {
    name: pokemonResponseBody.name
  }
}
