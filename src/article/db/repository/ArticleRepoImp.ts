
import Article, { IArticle } from "../odm/article";
import { ArticleRepo } from "./ArticleRepo";

export class ArticleRepoImpl implements ArticleRepo {
    public async addArticle(title: string, imageName: string, content: string): Promise<void> {
        try {
            const newArticle = new Article({ title, imageName, content });
            console.log(newArticle)
            await newArticle.save();
        } catch (error: any) {
            throw new Error("a problem occured while saving the article")
        }
    };
    public async getArticles(): Promise<IArticle[]> {
        try {
            const articles: IArticle[] = await Article.find(); 
            return articles;
        } catch (error) {
            console.error("Error getting articles:", error);
            throw error;
        }
    };
} 
