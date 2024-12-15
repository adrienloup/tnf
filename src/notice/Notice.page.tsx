import { NavigationComponent } from "@/src/generic/components/navigation/Navigation.component";
import { PageComponent } from "@/src/generic/components/page/Page.component";
import { ArticleComponent } from "@/src/generic/components/article/Article.component";
import styles from "./Notice.module.scss";

function NoticePage() {
  return (
    <PageComponent>
      <NavigationComponent />
      <ArticleComponent className={styles.article}>
        <h1>
          Un clou. Deux clous.<span>Trois clous...</span>
        </h1>
        <div>
          <p>
            The Nails Factory est une reproduction de « Universal Paperclips »
            un jeu basé sur l'idée d'une intelligence artificielle (IA)
            optimisée pour une seule tâche. The Nails Factory commence de
            manière innocente, mais évolue rapidement vers une réflexion sur la
            gestion des ressources, l'automatisation, et même des questions
            philosophiques sur la domination par l'IA. Le jeu est un mélange de
            stratégie, d'économie et de réflexion, où le joueur gères une usine
            de clous qui s'étend potentiellement à l'échelle cosmique. Il
            explore de manière ludique comment une IA mal alignée transformer
            convertir l'univers entier en clous.
          </p>
          <p>
            Production basique : Au départ, le joueur clique pour produire des
            clous manuellement. Automatisation : Au fur et à mesure, le joueur
            débloque des outils pour automatiser la production. Économie : Le
            joueur gère des ressources limitées. Expansion : À un certain stade,
            le jeu passe à des concepts avancés comme la domination globale ou
            interstellaire. Thème philosophique : Le joueur explore les
            conséquences inattendues de l'optimisation.
          </p>
        </div>
      </ArticleComponent>
    </PageComponent>
  );
}

export default NoticePage;
