import React from 'react';
import { Layout, VerticalNavbar } from '../../../../components';
import { 
  stab52f20w1, 
  stab52f20w2, 
  stab52f20w3, 
  stab52f20w4,
  stab52f20w6,
  stab52f20w7,
  stab52f20w8,
  stab52f20w9,
  stab52f20w10,
  stab52f20w11
} from '../../../../assets/documents';
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
        <h5>October 15, 2020</h5>
        <ul>
          <li>
            Reading Week (No Classes)
          </li>
        </ul>
        <h5>October 22, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w6}>Discrete Multivariate Random Variables</a>
          </li>
        </ul>
        <h5>October 29, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w7}>Expectation and Variance</a>
          </li>
        </ul>
        <h5>November 5, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w8}>Continuous Random Variables</a>
          </li>
        </ul>
        <h5>November 12, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w9}>Multivariate Continuous Distributions</a>
          </li>
        </ul>
        <h5>November 19, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w10}>Inequalities and Law of Large Numbers</a>
          </li>
        </ul>
        <h5>November 26, 2020</h5>
        <ul>
          <li>
            <a href={stab52f20w11}>Normal Distribution</a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
);