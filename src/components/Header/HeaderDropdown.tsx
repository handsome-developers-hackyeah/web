import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderDropdown = () => {
  return (
    <HeaderDropdownStyled>
      <li className='outlined'>
        <Link to='/baza-wiedzy'>Baza wiedzy</Link>
      </li>
      <li className='filled'>
        <Link to='/baza-wiedzy'>Pobierz Apke</Link>
      </li>
    </HeaderDropdownStyled>
  );
};

export default HeaderDropdown;

const HeaderDropdownStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-block: 20%;
  background: white;
  width: 100vw;
  height: 50vh;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: {
    left: 75px;
    top: 105px;
  }
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  li {
    margin: auto;

    &.outlined a {
      color: ${(props) => props.theme.brightGreen};
      border: 1px solid ${(props) => props.theme.brightGreen};
    }

    &.filled a {
      background: ${(props) => props.theme.brightGreen};
      color: white;
    }

    a {
      font-family: 'AfterGlow';
      text-decoration: none;
      font-size: 30px;
      border-radius: 500px;
      padding: 10px 50px;
      margin-inline: 20px;
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
