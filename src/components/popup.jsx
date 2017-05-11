import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/index.js';

class PopUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isComplete: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event)  {
    if (event.key === 'Enter' && event.target.value) {
      this.props.dispatch(addUser(event.target.value));
      this.setState({
        isComplete: true
      });
    }
  };


  render() {
    if (this.state.isComplete) {
      return null;
    }
    return (
      <div className="popup">
        <h3>What's your nickname?</h3>
        <input className="popupInput" type="text" maxLength={14}
               onKeyPress={this.onSubmit}/>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return state;
};

export default connect(MapStateToProps)(PopUp);
