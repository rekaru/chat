import React, { Component } from 'react';
import { connect } from 'react-redux';

const socket = io();

class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    let input;
    let emitMsg = {
      user: this.props.user,
      text: '',
    };
    return(
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return
          }
          emitMsg.text = input.value;
          socket.emit('chat message', emitMsg );
          input.value = '';
        }} >
          <input ref={node => {
            input = node
          }} />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}


const MapStateToProps = state => {
  return state
};

export default connect(MapStateToProps)(InputField);
