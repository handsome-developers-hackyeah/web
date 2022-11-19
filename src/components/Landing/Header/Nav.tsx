import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavStyled>
      <li className='outlined'>
        <Link to='/baza-wiedzy'>Baza wiedzy</Link>
      </li>
      <li className='filled'>
        <Link to='/baza-wiedzy'>Pobierz Apke</Link>
      </li>
    </NavStyled>
  );
};

export default Nav;

const NavStyled = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  margin-left: auto;
  li {
    &.outlined a {
      color: ${(props) => props.theme.brightGreen};
      border: 1px solid ${(props) => props.theme.brightGreen};
    }

    &.filled a {
      background: ${(props) => props.theme.brightGreen};
      color: white;
    }

    a {
      text-decoration: none;
      font-size: 10vmin;
      border-radius: 500px;
      padding: 10px 50px;
      margin-inline: 20px;

      @media (min-width: 900px) {
        font-size: 1.9vmin;
      }
    }
  }

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
