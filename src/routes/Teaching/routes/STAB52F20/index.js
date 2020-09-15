import React from 'react';
import { Layout, VerticalNavbar } from '../../../../components';
import { Helmet } from 'react-helmet';
import './styles.css';

export default () => (
  <div className='stab52f20-page'>
    <Helmet>
      <title>{'STAB52 Fall 2020 | Sayon Sivakumaran'}</title>
    </Helmet>
    <VerticalNavbar/>
    <Layout>
      <div className='stab52f20-div'>
        <h3>September 17, 2020</h3>
        <ul>
          <li>
            <a href='/teaching/stab52f20'>STAB53</a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
);