import React, { Children, Component, createRef } from 'react'
import Child from './Child'
import FuncChild from './FuncChild'

export default class Main extends Component {
    constructor() {
        super()
        this.inputElementRef = null
        this.inputRef = createRef()
        this.childRef = createRef()
        this.funcChildRef = createRef()
    }
    state = {
        name: '',
        val: 0
    }

    //callback ref
    setElementRef = (htmlElementRef) => {
        this.inputElementRef = htmlElementRef
        console.log(this.inputElementRef)
        // if (this.inputElementRef.value === '')
        //     alert('please enter username')
        this.inputElementRef.focus()
    }
    render() {
        return (
            <div>
                {/* 1: &nbsp;<input type='text' ref={this.setElementRef} /> */}
                <br />
                {/* 2: &nbsp;<input type='text' ref={this.inputRef} /> */}
                <Child ref={this.childRef} />
                <br />
                <br />
                <FuncChild ref={this.funcChildRef} />
            </div>
        )
    }
    componentDidMount() {
        // if (this.inputRef.current !== null) {
        //     this.inputRef.current.focus()
        // }
        // console.log(this.childRef)
        //this.childRef.current.focusInput()
        this.funcChildRef.current.focus()
    }
}


