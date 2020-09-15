import React from 'react';
import { Layout, VerticalNavbar } from '../../components';
import { Helmet } from 'react-helmet';
import './styles.css';

export default () => (
  <div className='about-page'>
    <Helmet>
      <title>{'Projects | Sayon Sivakumaran'}</title>
    </Helmet>
    <VerticalNavbar page='About'/>
    <Layout>
      <h4>
        <div className='narrow-container'>
          I'm <b>Sayon Sivakumaran</b>, a second year Computer Science student at the University of Toronto, Scarborough campus.
          Recently, I completed a co-op placement at Leonardo Worldwide as a full-stack software developer, where I worked on web applications using various different front-end and back-end technologies.
          Some of my technology interests include virtual reality, artificial intelligence, and cloud computing.
        </div>
      </h4>
    </Layout>
  </div>
);