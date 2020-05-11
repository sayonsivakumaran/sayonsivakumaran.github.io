import React from 'react';
import { Layout } from '../../components';
import './styles.css';

export default () => (
  <div className='not-found-page'>
    <Layout>
      <div className='not-found-message'>
        <h1>404</h1>
        <h4>Oops! Sorry We Can't Find That Page</h4>
        <p>Either something went wrong or the page does not exist anymore. </p>
        <a href='/'>Home</a>
      </div>
    </Layout>
  </div>
);