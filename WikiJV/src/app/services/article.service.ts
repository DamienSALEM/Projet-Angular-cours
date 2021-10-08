import { Subject } from "rxjs/Subject";


export class ArticleService {
    articleSubject = new Subject<any[]>();

    private listArticles = [
        {
            id: 1,
            title: "Uncharted",
            description: "jeu d'action1",
            resume: "tres bon jeu blablabla1",
            categorie: "action"
        },
        {
            id: 2,
            title: "Uncharted 2",
            description: "jeu d'action2",
            resume: "tres bon jeu blablabla2",
            categorie: "action"
        },
        {
            id: 3,
            title: "Uncharted 3",
            description: "jeu d'action3",
            resume: "tres bon jeu blablabla3",
            categorie: "action"
        },
        {
            id: 4,
            title: "Uncharted 4",
            description: "jeu d'action4",
            resume: "tres bon jeu blablabla4",
            categorie: "action"
        }

    ];

    getArticleById(id?: number) {
        var article = this.listArticles.find(
            (articleOject) => {
                return articleOject.id === id;
            }
        )
        return article;
    };

    delete(key: number) {
        this.listArticles.forEach((article, index) => {
            if (article.id == key) this.listArticles.splice(index, 1)
        });
        this.emitArticleSubject();
    }

    emitArticleSubject() {
        this.articleSubject.next(this.listArticles.slice());
    }

    addArticle(title: string, description: string, resume: string, categorie: string) {
        const articles = {
            id: 0,
            title: "",
            description: "",
            resume: "",
            categorie: ""
        };
        articles.id = this.listArticles[(this.listArticles.length - 1)].id + 1;
        articles.title = title;
        articles.categorie = categorie;
        articles.description = description;
        articles.resume = resume;

        this.listArticles.push(articles);
        this.emitArticleSubject();
    }


}