import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMsg } from '../actions/index.js';
import io from 'socket.io-client';



let InputField = ({dispatch}) => {
    let input

        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addMsg(input.value));
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

InputField = connect()(InputField);

export default InputField;