import styled from 'styled-components';

interface Props {
  description: string;
  image: string;
}

const ArticleContent = ({ description, image }: Props) => {
  return (
    <ArticleContentStyled>
      <p>{description}</p>
      <img src={`/images/articles/${image}`} />
    </ArticleContentStyled>
  );
};

export default ArticleContent;

const ArticleContentStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 200px;
  p {
    font-size: 25px;
    padding-right: 5%;
    width: 70%;
  }

  img {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
    border-radius: 20px;
  }
`;
