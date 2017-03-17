const buildCharacter = (data) => {
  if(data && data.name) {
    return {
      name: (data.name) || null,
      height: (data.height) || null,
      mass: (data.mass) || null,
      hairColor: (data.hair_color) || null,
      skinColor: (data.skin_color) || null,
      eyeColor: (data.eye_color) || null,
      birthYear: (data.birth_year) || null,
      gender: (data.gender) || null,
      homeworld: (data.homeworld) || null,
      films: (data.films) || null,
      species: (data.species) || null,
      vehicles: (data.vehicles) || null,
      starships: (data.starships) || null,
    };
  }
  return {};
}

export const getCharacterData = (searchQuery) => {
  const endpoint = `http://swapi.co/api/people/${searchQuery}/`;
  return fetch(endpoint).then((response) => response.json()).then((json) => buildCharacter(json));
}
