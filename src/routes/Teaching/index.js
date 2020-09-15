import React from 'react';
import { Layout, VerticalNavbar, BioImage } from '../../components';
import { aboutImage } from '../../assets/images/';
import { Helmet } from 'react-helmet';
import './styles.css';

export default () => (
  <div className='about-page'>
    <Helmet>
      <title>About | Sayon Sivakumaran</title>
    </Helmet>
    <VerticalNavbar page='Teaching'/>
    <Layout>
      <div className="modal-body row">
        <div className="col-md-6 about-div">
          <BioImage img={aboutImage}/>
        </div>
        <div className="col-md-6 about-div">
          <h1>About Me</h1>
          <h4>Hello!</h4>
          <h4>
            I'm <b>Sayon Sivakumaran</b>, a second year Computer Science and Statistics student at the University of Toronto, Scarborough campus.
            Recently, I completed a co-op placement at Leonardo Worldwide as a full-stack software developer, where I worked on web applications using various different front-end and back-end technologies.
            Some of my technology interests include virtual reality, artificial intelligence, and cloud computing.
          </h4>
          <h4>
            <b>Projects</b>
            <ul>
              <li><a href='https://github.com/sayonsivakumaran/JShell'>JShell</a></li>
              <li><a href='https://github.com/sayonsivakumaran/JetFighters'>Jet Fighters</a></li>
              <li><a href='https://github.com/sayonsivakumaran/SudokuAndroid'>Sudoku</a></li>
              <li><a href='https://github.com/sayonsivakumaran/Bingo'>Bingo</a></li>
              <li><a href='https://github.com/sayonsivakumaran/ResearchProject'>Statistical Research Project</a></li>
            </ul>
          </h4>
          <h4>
            <b>Tools & Technologies</b>
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C</li>
              <li>HTML</li>
              <li>React.js</li>
              <li>Marko.js (SPA JavaScript Framework, similar to React.js)</li>
              <li>Python</li>
              <li>CSS</li>
            </ul>
          </h4>
        </div>
      </div>
    </Layout>
  </div>
);