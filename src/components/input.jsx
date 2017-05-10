import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMsg } from '../actions/index.js';
import io from 'socket.io-client';

class InputField extends Component {
    render() {

        let input;
        return(
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    this.props.dispatch(addMsg(input.value));
                    input.value = '';
                }} >
                    <input ref={node => {
                        input = node
                    }} />
                    <button type="submit">Написать</button>
                </form>
            </div>
        )
    }
}


function MapStateToProps(state) {
    return {state}
}

export default connect(MapStateToProps)(InputField);
