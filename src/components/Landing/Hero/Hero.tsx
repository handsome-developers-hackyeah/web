import styled from 'styled-components';

import BackgroundCircle from './BackgroundCircle';
import HeroText from './HeroText';

import plant from '../../../assets/images/Plant.png';

const Hero = () => {
  return (
    <HeroeStyled>
      <BackgroundCircle />
      <div className='hero-container'>
        <HeroText />
        <img src={plant} />
      </div>
    </HeroeStyled>
  );
};

export default Hero;

const HeroeStyled = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;

  .hero-container {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    padding-top: 60px;

    img {
      width: 29vw;
      margin: auto;
      display: none;

      @media (min-width: 900px) {
        display: block;
      }
    }
  }
`;
