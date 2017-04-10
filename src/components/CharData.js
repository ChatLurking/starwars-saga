import React from 'react';
import '../App.css';

const CharData = (props) => {
  if(props.charData) {
    return (
      <div>
        <h2>Name: {props.charData.name}</h2>
        <h3>Birth Year: {props.charData.birthYear}</h3>
        <p>Hair Color: {props.charData.hairColor} Eye Color: {props.charData.eyeColor}</p>
        <p>Gender: {props.charData.gender}</p>
        <p>Height: {props.charData.height} Mass: {props.charData.mass}</p>
      </div>
    );
  }
  return(<div></div>)
};

CharData.propTypes = {
  charData: React.PropTypes.object,
};

export default CharData;
