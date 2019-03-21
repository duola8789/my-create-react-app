import React, { Component } from 'react';
import './App.css';
import './test2.less';
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="danger">fff</Button>
        <p className="test">123</p>
      </div>
    );
  }
}

export default App;
