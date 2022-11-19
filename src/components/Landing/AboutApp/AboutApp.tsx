import styled from 'styled-components';
import AboutAppText from './AboutAppText';

import phone from '../../../assets/images/Phone.svg';

const AboutApp = () => {
  return (
    <AboutAppStyled>
      <img src={phone} />
      <AboutAppText />
    </AboutAppStyled>
  );
};

export default AboutApp;

const AboutAppStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding-inline: 10%;
  margin-bottom: 100px;

  img {
    width: 80%;
    margin: auto;
  }

  @media (min-width: 1200px) {
    flex-direction: row;

    img {
      width: 50%;
    }
  }
`;
