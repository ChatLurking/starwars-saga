import React, { Component } from 'react';
import { newId } from './actions';
import { connect } from 'react-redux';
import { selectId, selectCharData } from './selectors';
import { createStructuredSelector } from 'reselect';
import CharData from '../components/CharData';

import '../App.css';

class App extends Component {
  handleClick = () => {
    this.props.setNewId(this.props.id+1);
  }

  render() {
    return (
      <div className="App">
        <CharData charData={this.props.charData} />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

App.propTypes = {
  id: React.PropTypes.number,
  setNewId: React.PropTypes.func.isRequired,
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
