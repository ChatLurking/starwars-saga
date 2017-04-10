import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  min-width: 300px;
  flex-direction: column;
`;

const H2 = styled.h2`
  margin: 3px;
`;

const H3 = styled.h3`
  margin: 3px;
`;

const P = styled.p`
  display: flex;
`;

const Span = styled.span`
  margin: 0 10px 0 0;
`;


const CharData = (props) => {
  if(props.charData) {
    return (
      <Wrapper>
        <H2>Name: {props.charData.name}</H2>
        <H3>Birth Year: {props.charData.birthYear}</H3>
        <P><Span>Hair Color: {props.charData.hairColor} </Span><Span> Eye Color: {props.charData.eyeColor}</Span></P>
        <p>Gender: {props.charData.gender}</p>
        <P><Span>Height: {props.charData.height}</Span><Span> Mass: {props.charData.mass}</Span></P>
      </Wrapper>
    );
  }
  return(<div></div>)
};

CharData.propTypes = {
  charData: React.PropTypes.object,
};

export default CharData;
