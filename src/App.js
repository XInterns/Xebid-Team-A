import React,{Component, Fragment} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Layout from './Components/Layout';

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Fragment>
          <Layout/>
        </Fragment>
      </BrowserRouter>
    );
  }
}

