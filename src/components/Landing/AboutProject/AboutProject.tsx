import styled from 'styled-components';
import Books from '../../../assets/images/Books.svg';
import AboutProjectText from './AboutProjectText';

const AboutProject = () => {
  return (
    <AboutProjectStyled>
      <AboutProjectText />
      <img src={Books} />
    </AboutProjectStyled>
  );
};

export default AboutProject;

const AboutProjectStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding-left: 10%;

  img {
    width: 80%;
    margin: auto;
  }

  @media (min-width: 1200px) {
    flex-direction: row;

    img {
      width: 55vw;
    }
  }
`;
