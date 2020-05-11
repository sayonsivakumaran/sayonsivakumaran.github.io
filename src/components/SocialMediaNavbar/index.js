import React from 'react';
import './styles.css';
import { github, facebook, mail, linkedin } from '../../assets/icons';

export default () => (
  <ul className='social-media-nav'>
    <li><a href='https://www.linkedin.com/in/sayonsivakumaran/'><img src={ linkedin }></img></a></li>
    <li><a href="mailto:sayon.sivakumaran@gmail.com"><img src={ mail }></img></a></li>
    <li><a href="https://www.github.com/sayonsivakumaran"><img src={ github }></img></a></li>
    <li><a href="https://www.facebook.com/sayonsivakumaran.18"><img src={ facebook }></img></a></li>
  </ul>
);
