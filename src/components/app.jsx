import React, { Component } from 'react';
import MessageField from './messageField.jsx';
import InputField from './input.jsx';

class App extends Component {
    render() {
        return(
            <div>
                <MessageField/>
                <InputField/>
            </div>
        )
    }
}

export default App;