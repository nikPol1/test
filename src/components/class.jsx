import React, { Component } from 'react'

class clas extends Component {
    
    state = {
        value: Number(1),
    }

    componentDidMount() {
        console.log('монтировано')
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    componentDidUnmount(){
        console.log('размонт')
    }
    render() {
        return (
            <div><button onClick={() => this.setState({value: this.value + Number(1)})}>a</button></div>
        )
    }
}

export default clas
