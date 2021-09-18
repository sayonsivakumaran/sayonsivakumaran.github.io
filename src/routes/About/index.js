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
          I'm <b>Sayon Sivakumaran</b>, a fourth year Computer Science and Statistics student at the University of Toronto.
          Over the past two years, I was able to grow my skills as a software engineer in a professional environment by completing internships relating to 
          back-end engineering, machine learning, and full-stack development at the companies Amazon, Okta, Georgian, Bond Brand Loyalty, and Leonardo Worldwide.
          When I'm not working or studying, I spend much of my time on the internet, where I use Reddit to a somewhat unhealthy degree. I'm also a passionate film and television fan, and 
          recently have gotten into reading. In order to not spend my entire day indoors, I also like going on long walks in nature. Oh, and of course, I spend a bunch of time bothering my cat as well.
          Thanks for visiting my site, and feel free to reach out!
        </p>
      </div>
    </Layout>
  </div>
);