import React from 'react';
import { Layout, VerticalNavbar } from '../../components';
import { Helmet } from 'react-helmet';
import './styles.css';

export default () => (
  <div className='about-page'>
    <Helmet>
      <title>About | Sayon Sivakumaran</title>
    </Helmet>
    <VerticalNavbar page='About'/>
    <Layout>
      <div className="about-div">
        <h1>About Me</h1>
        <p>
          I'm <b>Sayon Sivakumaran</b>, a third year Computer Science and Statistics student at the <b>University of Toronto</b>,
          where I am working as a Teaching Assistant for the Introductory Probability course STAB52.
          I am currently working as a <b>Data Engineer</b>, and have prior experience working as a <b>Full Stack Engineer</b>.
          When I'm not working or studying, I spend much of my time surfing the internet, and watching or reading about movies and television.
          Thanks for visiting my site! Feel free to check out some of the projects I've worked on on <a href='https://github.com/sayonsivakumaran'>GitHub</a>, and don't hesistate to reach out!
        </p>
      </div>
    </Layout>
  </div>
);