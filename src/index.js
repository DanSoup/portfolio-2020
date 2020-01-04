import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';

import MainPage from './components/MainPage'

class App extends Component {
  render () {
    return <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  };
}

ReactDOM.render(<App/>, document.getElementById('app'));