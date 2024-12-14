import { Article } from "@/src/generic/components/article/Article.type";
import styles from "@/src/generic/components/Article/article.module.scss";

export const ArticleComponent = ({ children }: Article) => {
  return (
    <article className={styles.article} role="article">
      {children}
    </article>
  );
};
