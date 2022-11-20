import styled from 'styled-components';
import logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <Link to='/'>
      <NavLogoStyled src={logo} />
    </Link>
  );
};

const NavLogoStyled = styled.img`
  width: 185px;
  z-index: 1;

  @media (min-width: 900px) {
    width: 180px;
  }
`;

export default NavLogo;
