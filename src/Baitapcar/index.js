import React, { Component } from 'react'

export default class Baitapcar extends Component {
    state = {
        count: 0,
        doubleCount: 0,
    }
    handleCount = () => {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        });

        this.setState((state) => {
            return {
                doubleCount: state.count * 2
            }
        })
    }
    render() {
        return (
           <div>
                <p>count: {this.state.count}</p> 
                <p>doubleCount: {this.state.doubleCount}</p> 
                <button onClick={this.handleCount}>Click</button>
           </div>
        );
    }
}
