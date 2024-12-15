import { classNames } from "@/src/generic/utils/classNames";
import { Article } from "@/src/generic/components/article/Article.type";
import styles from "./Article.module.scss";

export const ArticleComponent = ({ children, className }: Article) => {
  return (
    <article className={classNames([styles.article, className])} role="article">
      {children}
    </article>
  );
};
