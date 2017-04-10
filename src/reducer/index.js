import { INIT_DATA, ERROR, NEW_ID } from '../containers/constants';
import { fromJS } from 'immutable';

const initState = fromJS({
  id: 0,
  charData: {
    name: null,
    height: null,
    mass: null,
    hairColor: null,
    skinColor: null,
    eyeColor: null,
    birthYear: null,
    gender: null,
    homeworld: null,
    films: null,
    species: null,
    vehicles: null,
    starships: null,
  },
  error: null,
});

function reducer (state = initState, action) {
  switch (action.type) {
    case INIT_DATA:
      if(action.charData && action.charData.name) {
        return state
          .setIn(['charData', 'name'], action.charData.name)
          .setIn(['charData', 'height'], action.charData.height)
          .setIn(['charData', 'mass'], action.charData.mass)
          .setIn(['charData', 'hairColor'], action.charData.hairColor)
          .setIn(['charData', 'skinColor'], action.charData.skinColor)
          .setIn(['charData', 'eyeColor'], action.charData.eyeColor)
          .setIn(['charData', 'birthYear'], action.charData.birthYear)
          .setIn(['charData', 'gender'], action.charData.gender)
          .setIn(['charData', 'homeworld'], action.charData.homeworld)
          .setIn(['charData', 'films'], action.charData.films)
          .setIn(['charData', 'species'], action.charData.species)
          .setIn(['charData', 'vehicles'], action.charData.vehicles)
          .setIn(['charData', 'starships'], action.charData.starships)
          .set('error', null);
      }
      return state
    case NEW_ID:
      return state
        .set('id', action.data);
    case ERROR:
      return state
        .set('error', action.charData.error);
    default:
      return state;
  }
}

export default reducer;
