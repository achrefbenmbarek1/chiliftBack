
import { ArticleRepo } from '../../db/repository/ArticleRepo';
import Article, { IArticle } from '../../db/odm/article';
import { removeImage } from '../../InfrastructureService/RemoveImage';
import { error } from 'console';
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

    public async deleteArticle(_id: string): Promise<void> {
        try {
            const article: IArticle = await this.articleRepo.removeArticle(_id);
            if (!article.imageName) {
                throw error('no image to be removed')

            }
            removeImage(article.imageName)

        } catch (error) {
            throw error;
        }
    }

    public async modifyArticle(_id: string, data: { title: string, content: string, imageName: string }): Promise<void> {
        try {
            await this.articleRepo.modifyArticle(_id, data)
        } catch (error) {
            console.log(error);
            throw error
        }

    }
}

