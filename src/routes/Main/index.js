import React from 'react';
import { Layout, ProfileImage, MenuNavbar, SocialMediaNavbar } from '../../components';
import { profileImage } from '../../assets/images/';
import { Helmet } from 'react-helmet'; 
import './styles.css';

export default () => (
  <div className='main-page'>
    <Helmet>
      <title>Home | Sayon Sivakumaran</title>
    </Helmet>
    <Layout>
      <ProfileImage img={profileImage}/>
      <h1>Sayon Sivakumaran</h1>
      <h4>Software Engineer | Teaching Assistant | UofT CS & Stats</h4>
      <SocialMediaNavbar/>
      <MenuNavbar/>
    </Layout>
  </div>
);