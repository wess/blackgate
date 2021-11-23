//
// index.tsx
// asylum
// 
// Author: Wess Cope (me@wess.io)
// Created: 11/16/2021
// 
// Copywrite (c) 2021 Wess.io
//

import React from 'react';

import {
  Route
} from 'react-router-dom';

import Provider from '../providers/';
import Router from '../router';
import Layout from '../layouts';

const Example = () => (
  <div>Hello World</div>
);

const App = () => {
  return (
    <Provider>    
      <Layout>
        <Router>
          <Route path="/" element={<Example/>} />
        </Router>
      </Layout>
    </Provider>
  )
};

export default App;