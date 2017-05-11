import React, { Component } from 'react';
import { connect } from 'react-redux';

const socket = io();

class InputField extends Component {

  render() {
    let input;
    let emitMsg = {
      user: this.props.user,
      text: '',
    };
    return(
      <div className="inputContainer">
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          emitMsg.text = input.value;
          socket.emit('chat message', emitMsg );
          input.value = '';
        }}>
          <input ref={node => {
            input = node;
          }} placeholder="type something"/>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}


export default connect(state => state)(InputField);
