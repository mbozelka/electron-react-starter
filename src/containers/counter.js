import React, { Component } from 'React';
import { connect } from 'react-redux';

import { ipcRenderer } from 'electron';

class Counter extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button type='button' onClick={this.props.onIncrimentCounter}>Increment counter</button>
                <button type='button' onClick={this.props.onDecrementCounter}>Decrement counter</button>
            </div>
        );
    }

}

const mapStateTpProps = (state) => {
    return {
        counter: state.CounterReducer.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrimentCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'})
    };
};

export default connect(mapStateTpProps, mapDispatchToProps)(Counter);