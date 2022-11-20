import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <h1>Comptee</h1>
      <h3>Wpisz swój email, aby zapisać się do naszego newslettera</h3>
      <div>
        <input type='text' />
        <button>Zaczynamy</button>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  background: #fdfafa;
  width: 100vw;
  color: red;
  padding: 50px 50px;
  text-align: center;

  h1,
  h3 {
    color: #d5d2d2;
    margin: auto;
  }

  div {
    align-items: center;
    justify-content: space-between;
    width: 30%;
    margin: auto;
    box-shadow: 0px 0px 32px rgba(225, 217, 217, 0.5);
    border-radius: 7px;
    overflow: hidden;
    margin-top: 40px;
    display: none;

    input,
    button {
      border: none;
      padding-block: 10px;
    }

    input {
      background: transparent;
      width: 75%;
      outline: none;
      padding-left: 30px;
    }

    button {
      width: 25%;
      border-radius: 7px;
      background: ${(props) => props.theme.brightGreen};
      color: white;
    }

    @media (min-width: 900px) {
      display: flex;
    }
  }
`;
