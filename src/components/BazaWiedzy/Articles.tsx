import styled from 'styled-components';
import articles from '../../lib/articles';

import Article from './Article';

const Articles = () => {
  return (
    <ArticlesStyled>
      {articles.map((article) => (
        <Article
          title={article.title}
          description={
            article.description.split(' ').slice(0, 15).join(' ') + '...'
          }
          image={article.image}
          id={article.id}
        />
      ))}
    </ArticlesStyled>
  );
};

export default Articles;

const ArticlesStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding-inline: 10%;
  list-style: none;
`;
