import React from 'react';
import './styles.css';
import { github, facebook, mail, linkedin } from '../../assets/icons';

export default () => (
  <ul className='social-media-nav'>
    <li><a href='https://www.linkedin.com/in/sayonsivakumaran/'><img src={ linkedin } alt='LinkedIn'></img></a></li>
    <li><a href="mailto:sayon.sivakumaran@gmail.com"><img src={ mail } alt='E-Mail'></img></a></li>
    <li><a href="https://www.github.com/sayonsivakumaran"><img src={ github } alt='Github'></img></a></li>
    <li><a href="https://www.facebook.com/sayonsivakumaran.18"><img src={ facebook } alt='Facebook'></img></a></li>
  </ul>
);
