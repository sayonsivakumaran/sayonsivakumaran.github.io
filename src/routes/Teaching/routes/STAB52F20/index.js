import React from 'react';
import { Layout, VerticalNavbar } from '../../../../components';
import { dummy } from '../../../../assets/documents';
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
        <h3>Tutorial Information</h3>
        <h4><b>Meeting Time</b>: Thursdays @ 17:00-18:00</h4>
        <h4><b>Meeting Location</b>: Blackboard Collaborate</h4>
        <h3>Tutorial Notes</h3>
        <h5>September 17, 2020</h5>
        <ul>
          <li>
            <a href={dummy}>Probability Models & Combinatorics</a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
);