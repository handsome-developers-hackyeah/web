import styled from 'styled-components';

const BazaWiedzyHeader = () => {
  return (
    <BazaWiedzyHeaderStyled>
      <h1>Artykuły</h1>
      <div>
        <input type='text' placeholder='Szukaj' />
        <button>Szukaj</button>
      </div>
    </BazaWiedzyHeaderStyled>
  );
};

export default BazaWiedzyHeader;

const BazaWiedzyHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 10%;
  margin-top: 48px;
  margin-bottom: 50px;

  h1 {
    color: ${(props) => props.theme.gray};
    font-size: 6vmin;
    text-align: center;
  }

  div {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 2vmin;

    input {
      border-radius: 500px;
      color: ${(props) => props.theme.gray};
      padding: 10px 50px;
      margin-inline: 20px;
      background: #eeeeee;
      border: none;
      width: 75%;
    }

    button {
      border: none;
      background: ${(props) => props.theme.brightGreen};
      color: white;
      text-decoration: none;
      border-radius: 500px;
      padding: 10px 50px;
      margin-inline: 20px;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;

    h1 {
      text-align: left;
      font-size: 4vmin;
      margin-right: 60px;
    }

    div {
      font-size: 0.5vmin;

      input {
        padding-block: 5px;
        padding-inline: 20px;
      }

      button {
        padding-block: 5px;
        padding-inline: 70px;
      }
    }
  }
`;
