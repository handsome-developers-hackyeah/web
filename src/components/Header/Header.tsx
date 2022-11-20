import { useEffect, useState } from 'react';

import styled from 'styled-components';
import HeaderBars from './HeaderBars';
import HeaderDropdown from './HeaderDropdown';
import Nav from './Nav';
import NavLogo from './NavLogo';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navState, setNavState] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);

  const changeDropdownState = () => {
    console.log('changeDropdownState');
    setDropdownState(!dropdownState);
  };

  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY);
  });

  useEffect(() => {
    if (scrollY > 0) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }, [scrollY]);

  return (
    <HeaderStyled className={navState ? 'scrolled' : 'unScrolled'}>
      <NavLogo />
      <Nav />
      <HeaderBars dropdownState={changeDropdownState} />
      {dropdownState && <HeaderDropdown />}
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.nav`
  position: fixed;
  z-index: 1000;
  align-items: center;
  top: 0;
  display: flex;
  width: 100vw;
  max-width: 100vw;
  padding-inline: 1%;
  transition: all 0.2s ease-in-out;

  &.scrolled {
    padding-block: 20px;
    background: white;
  }

  &.unScrolled {
    padding-block: 40px;
    background: transparent;
  }

  @media (min-width: 900px) {
    padding-inline: 10%;
  }
`;
