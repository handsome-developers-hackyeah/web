import styled from 'styled-components';

const AboutUsText = () => {
  return (
    <AboutUsTextStyled>
      <h1>Wygrywanie przez kompostowanie!</h1>
      <p>
        Comtee to aplikacja, dzięki której nauczysz się jak zarządzać
        bioodpadami w Twoim domu! Kompostowanie odpadów może dużo prostsze niż
        myślisz! Niezależnie, czy mieszkasz w domu, czy mieszkaniu, wytwarzanie
        naturalnego nawozu jest możliwe. Wrzucaj zdjęcia i dziel się swoim
        postępem w tworzeniu domowego kompostownika razem z Comptee! Reaguj,
        komentuj i twórz społeczność dbającą o lokalne i globalne środowisko.
        Pobierz Comptee już teraz!
      </p>
    </AboutUsTextStyled>
  );
};

export default AboutUsText;

const AboutUsTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  h1 {
    font-size: 55px;
    margin-bottom: 20px;
  }

  p {
    font-size: 25px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 50%;
    text-align: right;

    p {
      margin-left: auto;
    }
  }
`;
