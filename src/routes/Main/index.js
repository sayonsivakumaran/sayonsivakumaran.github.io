import React from 'react';
import { Layout, ProfileImage, MenuNavbar, SocialMediaNavbar } from '../../components';
import img from '../../assets/profile-image.jpg';
import { Helmet } from 'react-helmet'; 
import './styles.css';

export default () => (
  <div className='main-page'>
    <Helmet>
      <title>Home | Sayon Sivakumaran</title>
    </Helmet>
    <Layout>
      <ProfileImage img={img}/>
      <h1>Sayon Sivakumaran</h1>
      <h4>Software Developer | Undergraduate Student</h4>
      <SocialMediaNavbar/>
      <MenuNavbar/>
    </Layout>
  </div>
);