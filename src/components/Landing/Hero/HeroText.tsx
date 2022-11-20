import styled from 'styled-components';

const HeroText = () => {
  return (
    <HeroTextStyled>
      <h1>Czas to skompostować!</h1>
      <p>
        Comptee to kompleksowe narzędzie dostarczające szczegółowe informacje
        odnośnie ilości kompostu powstającego wśród mieszkańców oraz edukujące
        społeczeństwo w zakresie korzystania z kompostowników.
      </p>
    </HeroTextStyled>
  );
};

export default HeroText;

const HeroTextStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: 'AfterGlow';
  color: ${(props) => props.theme.gray};
  text-align: center;

  h1 {
    font-size: 70px;
  }

  p {
    padding-top: 30px;
    width: 80%;
    font-size: 25px;
    margin: auto;
  }

  @media (min-width: 900px) {
    width: 60%;
    text-align: left;
    padding-left: 10%;

    p {
      padding-left: 10px;
      padding-top: 30px;
      margin: 0;
    }
  }
`;
