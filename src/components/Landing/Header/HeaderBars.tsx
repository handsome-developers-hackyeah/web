import styled from 'styled-components';

import bars from '../../../assets/images/Bars.svg';

interface Props {
  dropdownState: () => void;
}

const HeaderBars = ({ dropdownState }: Props) => {
  return (
    <HeaderBarsStyled onClick={dropdownState}>
      <img src={bars} />;
    </HeaderBarsStyled>
  );
};

export default HeaderBars;

const HeaderBarsStyled = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  margin-left: auto;
  z-index: 100;

  @media (min-width: 900px) {
    display: none;
  }
`;
