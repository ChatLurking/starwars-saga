import React, { Component } from 'react';
import './App.css';
import { initData, newId } from './containers/actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
      this.props.dispatch(newId(4));
  }

  handleClick() {
    console.log('click');
    this.props.dispatch(initData());
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleClick()}>Click me</button>
      </div>
    );
  }
}

// App.propTypes = {
//   data: React.PropTypes.object,
// };
//
// const mapStateToProps = () => createStructuredSelector({
//   data: selectGlobal(),
// });

// const mapDispatchToProps = (dispatch) => ({
//   id: newId(),
//   data: initData(),
// });

export default connect()(App);
