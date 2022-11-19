import styled from 'styled-components';
import BackgroundCircleImg from '../../../assets/images/BackgroundCircle.svg';

const BackgroundCircle = () => {
  return <BackgeoundCircleStyled src={BackgroundCircleImg} />;
};

export default BackgroundCircle;

const BackgeoundCircleStyled = styled.img`
  position: absolute;
  top: 0;
  left: 40%;
  width: 1400px;
`;
