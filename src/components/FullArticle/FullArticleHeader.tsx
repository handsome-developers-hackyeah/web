import styled from 'styled-components';
import GoBackBtn from './GoBackBtn';

interface Props {
  title: string;
}

const FullArticleHeader = ({ title }: Props) => {
  return (
    <FullArticleHeaderStyled>
      <h1>{title}</h1>
      <GoBackBtn />
    </FullArticleHeaderStyled>
  );
};

export default FullArticleHeader;

const FullArticleHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
