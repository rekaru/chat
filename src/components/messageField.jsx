import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message.jsx';

class MessageField extends Component {
  render() {
    let propsStore = this.props.messages.messages;
    let allMessages = propsStore.map(message => {
      return (
      <Message user={message.user} text={message.text} />
      )
    });

    return (
      <div>
        {allMessages}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state
  }
}

export default connect(mapStateToProps)(MessageField);
