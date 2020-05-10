import React from 'react';
import { Layout, VerticalNavbar } from '../../components';
import { Helmet } from 'react-helmet';

export default () => (
  <div className='about-page'>
    <Helmet>
      <title>{'Projects | Sayon Sivakumaran'}</title>
    </Helmet>
    <VerticalNavbar page='About'/>
    <Layout>

    </Layout>
  </div>
);