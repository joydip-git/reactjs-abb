import { Component } from "react";

class Parent extends Component {
    // constructor(propertyObject) {
    //     super(propertyObject)
    //     this.state = {
    //         x: propertyObject.phaseIn
    //     }
    //     console.log(propertyObject)
    // }
    // constructor() {
    //     super()
    //     console.log(this.props)
    // }
    state = {
        x: 0
    }
    render() {
        console.log(this.props)
        return <div>{this.state.x}</div>
    }
}
export default Parent