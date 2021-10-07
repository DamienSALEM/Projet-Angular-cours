import { Subject } from "rxjs";


export class ArticleService {

    articleSubject = new Subject<any[]>();

    private listArcticles = [
        {
            id: 0,
            title: "Uncharted",
            description: "jeu d'action",
            resume: "tres bon jeu blablabla",
            categorie: "action"
        }
    ]

    emitArticleSubject() {
        this.articleSubject.next(this.listArcticles.slice());
    }

    addArticle(title: string, description: string, resume: string, categorie: string) {
        const articles = {
            id: 0,
            title: "",
            description: "",
            resume: "",
            categorie: ""
        };
        articles.title = title;
        articles.description = description;
        articles.resume = resume;
        articles.categorie = categorie;
        articles.id = this.listArcticles[(this.listArcticles.length - 1)].id + 1;
        this.listArcticles.push(articles);
    }

}