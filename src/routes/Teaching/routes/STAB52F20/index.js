import React from 'react';
import { Layout, VerticalNavbar } from '../../../../components';
import { stab52f20w1, stab52f20w2, stab52f20w3, stab52f20w4 } from '../../../../assets/documents';
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
            <a href={stab52f20w1}>Probability Models</a>
          </li>
        </ul>
        <h5>September 24, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w2}>Counting</a>
          </li>
        </ul>
        <h5>October 1, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w3}>Conditional Probability</a>
          </li>
        </ul>
        <h5>October 8, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w4}>Discrete Random Variables</a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
);