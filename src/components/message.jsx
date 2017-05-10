import React, { Component} from 'react';

class Message extends Component {
    render() {
        return (
            <div>
                <span>{this.props.user} : </span>
                <span>{this.props.text}</span>
            </div>
        )
    }
}

export default Message;