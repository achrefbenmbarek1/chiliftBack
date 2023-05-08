
import { ArticleRepo } from '../../db/repository/ArticleRepo';
import { IArticle } from '../../db/odm/article';
export class ArticleInteractor {
    private articleRepo: ArticleRepo;
    constructor(articleRepo: ArticleRepo) {
        this.articleRepo = articleRepo;
    }
    public async addArticle(title: string, imageName: string, content: string): Promise<void> {
        await this.articleRepo.addArticle(title, imageName, content)
    }
    public async retrieveArticles(): Promise<IArticle[]> {
        try {
            const articles: IArticle[] = await this.articleRepo.getArticles();
            console.log(articles);
            return articles;

        } catch (error) {
            throw error;
        }
    }
}

