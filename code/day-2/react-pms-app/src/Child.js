import React, { Component, createRef } from 'react'

export default class Child extends Component {
    constructor() {
        super()
        this.inputRef = createRef()
    }
    focusInput = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                Child Input: &nbsp; <input type='text' ref={this.inputRef} />
            </div>
        )
    }
    componentDidMount() {
        // this.focusInput()
    }
}
