import { useParams } from 'react-router';
import styled from 'styled-components';

import FullArticleHeader from './FullArticleHeader';
import ArticleContent from './ArticleContent';

import articles from '../../lib/articles';

const FullArticle = () => {
  const { articleId } = useParams();

  const article = articles.filter(
    (article) => article.id === Number(articleId)
  )[0];

  return (
    <FullArticleStyled>
      <FullArticleHeader title={article.title} />
      <ArticleContent
        description={article ? article.description : ''}
        image={article ? article.image : ''}
      />
    </FullArticleStyled>
  );
};

export default FullArticle;

const FullArticleStyled = styled.div`
  padding-top: 150px;
  margin-inline: 10%;
`;
