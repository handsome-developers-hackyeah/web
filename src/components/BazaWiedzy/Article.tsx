import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
  image: string;
  id: number;
}

const Article = ({ title, description, image, id }: Props) => {
  return (
    <ArticleStyled>
      <div>
        <h1>{title}</h1>
        <p> {description}</p>
        <button>
          <Link to={`/artykul/${id}`}>Zobacz wiecej!</Link>
        </button>
      </div>
      <img src={`images/articles/${image}`} />
    </ArticleStyled>
  );
};

const ArticleStyled = styled.li`
  display: flex;
  flex-direction: column;
  margin-block: 20px;
  padding-bottom: 50px;
  border-bottom: 2px solid ${(props) => props.theme.brightGreen};
  height: 750px;
  width: 100%;

  :last-child {
    border-bottom: none;
  }

  div {
    flex-direction: column;
    margin-right: 50px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding-block: 5%;
    text-align: center;

    button {
      border: none;
      background: ${(props) => props.theme.brightGreen};
      color: white;
      text-decoration: none;
      font-size: 10vmin;
      border-radius: 500px;
      padding: 8px 50px;
      margin-inline: 20px;
      font-size: 20px;
      width: 80%;
      margin: auto;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }

  img {
    height: 100%;
    width: auto;
    border-radius: 20px;
    margin: auto;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    height: 450px;

    div {
      width: 50%;
      text-align: left;

      button {
        width: 45%;
        margin: 0;
      }
    }

    img {
      height: 100%;
      max-width: 50%;
    }
  }
`;
export default Article;
