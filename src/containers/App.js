import React, { Component } from 'react';
import { newId } from './actions';
import { connect } from 'react-redux';
import { selectId, selectCharData } from './selectors';
import { createStructuredSelector } from 'reselect';
import CharData from '../components/CharData';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Button = styled.button`
  padding: 5px;
  width: 200px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid #6666ff;
  font-weight: 900;
  color: #EEE;
  margin-top: 20px;
  
  &:hover {
    background: #6666ff;
  }
`;

class App extends Component {
  handleClick = () => {
    this.props.setNewId(this.props.id+1);
  }

  render() {
    return (
      <Wrapper className="App">
        <CharData charData={this.props.charData} />
        <Button onClick={this.handleClick}>Click me</Button>
      </Wrapper>
    );
  }
}

App.propTypes = {
  id: React.PropTypes.number,
  setNewId: React.PropTypes.func,
  charData: React.PropTypes.object,
};

const mapStateToProps = () => createStructuredSelector({
  id: selectId(),
  charData: selectCharData(),
});

const mapDispatchToProps = (dispatch) => ({
  setNewId(id) {
    dispatch(newId(id));
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
