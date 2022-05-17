import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Value from './Value';
import Welcome from './Welcome';

/*
function App() {

  console.log('App is rendered')

  const message = "Welcome to React JS"
  let val = 100

  const increaseValue = () => {
    console.log(val)
    val = val + 1
    console.log(val)
  }

  const appElement = (
    <div className="App">
      <Welcome message={message} />
      <br />
      <button onClick={increaseValue}>Increase</button>
      <br />
      <Value valueData={val} />
    </div>
  );

  return appElement
}
*/

class App extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Welcome to React JS',
      val: 10
    }
  }
  increaseValue = () => {
    //do not mutate the state directly
    //this.state.val++

    //mutate the state immutably
    //v1.
    // this.setState({
    //   val: 20
    // })

    //v2.
    // this.setState(
    //   (currentState) => {
    //     const newState = {
    //       val: currentState.val + 1
    //     }
    //     return newState
    //   }
    // )

    //v3.
    this.setState(
      (currentState) => {
        const newState = {
          val: currentState.val + 1
        }
        return newState
      },
      () => {
        console.log(this.state.val)
      }
    )
  }
  render() {
    console.log('App rendered')
    const appElement = (
      <div className="App">
        <Welcome message={this.state.message} />
        <br />
        <br />
        <Value
          valueData={this.state.val}
          increaseHandler={this.increaseValue} />
      </div>
    );
    return appElement
  }
}

export default App;

// const propObject = { message: "Welcome to React JS"}
//const welcomeComp = Welcome(propObject)
/**
 *  <div className="App">
      {welcomeComp}
    </div>
 */
