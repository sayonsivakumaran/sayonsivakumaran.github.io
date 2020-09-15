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
        <h2>Fall 2020</h2>
        <ul>
          <li>
            <a href='/teaching/stab52f20'>STAB52</a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
);