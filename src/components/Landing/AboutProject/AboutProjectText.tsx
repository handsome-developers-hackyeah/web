import styled from 'styled-components';

const AboutProjectText = () => {
  return (
    <AboutProjectTextStyled>
      <h1>Zdobądź potrzebną wiedze!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan
        neque sit amet leo efficitur pellentesque.
      </p>
    </AboutProjectTextStyled>
  );
};

export default AboutProjectText;

const AboutProjectTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
    margin: auto;
  }

  p {
    font-size: 15px;
    width: 100%;
    margin: auto;
  }

  @media (min-width: 1200px) {
    width: 50%;
    text-align: left;
    margin: auto;

    h1 {
      font-size: 60px;
      margin: 0;
    }

    p {
      font-size: 30px;
      width: 70%;
      margin-right: auto;
      margin-left: 0;
    }
  }
`;
