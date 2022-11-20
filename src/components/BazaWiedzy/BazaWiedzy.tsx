import styled from 'styled-components';
import Articles from './Articles';
import BazaWiedzyHeader from './BazaWiedzyHeader';

const BazaWiedzy = () => {
  return (
    <BazaWiedzyStyled>
      <BazaWiedzyHeader />
      <Articles />
    </BazaWiedzyStyled>
  );
};

export default BazaWiedzy;

const BazaWiedzyStyled = styled.div`
  padding-top: 100px;
`;
