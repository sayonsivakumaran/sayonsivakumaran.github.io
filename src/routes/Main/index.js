import React from 'react';
import { Layout, ProfileImage, MenuNavbar } from '../../components';
import img from '../../assets/profile-image.jpg';

export default () => (
  <div className='main-page'>
    <Layout>
      <ProfileImage img={img}/>
      <h1>Sayon Sivakumaran</h1>
      <h4>Software Developer | Undergraduate Student</h4>
      <p>Don't forget that gifts often come with costs that go beyond their purchase price. When you purchase a child the latest smartphone, you're also committing to a monthly phone bill. When you purchase the latest gaming system, you're likely not going to be satisfied with the games that come with it for long and want to purchase new titles to play. When you buy gifts it's important to remember that some come with additional costs down the road that can be much more expensive than the initial gift itself.</p>
      <p>He watched as the young man tried to impress everyone in the room with his intelligence. There was no doubt that he was smart. The fact that he was more intelligent than anyone else in the room could have been easily deduced, but nobody was really paying any attention due to the fact that it was also obvious that the young man only cared about his intelligence.</p>
      <p>The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.</p>
      <MenuNavbar/>
    </Layout>
  </div>
);