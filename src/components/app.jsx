import React, { Component } from 'react';
import MessageField from './messageField.jsx';
import InputField from './input.jsx';
import PopUp from './popup.jsx';

class App extends Component {
  render() {
    return(
      <div className="container">
        <PopUp/>
        <MessageField/>
        <InputField/>
      </div>
    );
  }
}

export default App;
