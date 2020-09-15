import React from 'react';
import { Layout, VerticalNavbar } from '../../components';
import { Helmet } from 'react-helmet';
import './styles.css';

export default () => (
  <div className='teaching-page'>
    <Helmet>
      <title>{'Teaching | Sayon Sivakumaran'}</title>
    </Helmet>
    <VerticalNavbar page='Teaching'/>
    <Layout>
      <div className='teaching-div'>
        <h3>Fall 2020</h3>
        <ul>
          <li>
            <a href='/teaching/stab52f20'>STAB52 (Introduction to Probability)</a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
);