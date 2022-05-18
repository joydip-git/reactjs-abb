import './App.css';
import Parent from './Parent';

function Some() {
    const anilObj = {
        name: 'anil',
        id: 1
    }
    // console.log()
    // console.log(anilObj['id'])
    // const copy = {}
    // for (let propName in anilObj) {
    //   const propValue = anilObj[propName]
    //   //console.log(`${propName}:${propValue}`)
    //   copy[propName] = propValue
    // }
    const copy = { ...anilObj }
    console.log(copy)

    let currentState = {
        x: 10,
        y: 20
    }

    const newState = { x: 100 }


    //console.log(copyState)
    const updatedState = {
        ...currentState,
        ...newState
    }

    currentState = updatedState

    return (
        <div className="App">
            <Parent val={10} />
        </div>
    );
}

export default Some;
