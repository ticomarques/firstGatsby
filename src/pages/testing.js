import React from 'react';
import Layout from '../components/layout'

import Menu from "../components/Menu"

// import { Container } from './styles';

const testing = () =>  (
    <Layout>  
    <div className="row">
      <div className="col col-1-of-4">
        <Menu />
      </div>

      <div className="col col-3-of-4">
        <h1>Testing page</h1>
        <p>Welcome to testing page</p>
      </div>
    </div>
  </Layout>
);

export default testing;
