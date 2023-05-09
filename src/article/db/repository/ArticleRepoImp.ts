
import { error } from "console";
import Article, { IArticle } from "../odm/article";
import { ArticleRepo } from "./ArticleRepo";

export class ArticleRepoImpl implements ArticleRepo {
    public async addArticle(title: string, imageName: string, content: string): Promise<void> {
        try {
            const newArticle = new Article({ title, imageName, content });
            console.log(newArticle)
            await newArticle.save();
        } catch (error: any) {
            throw new Error("a problem occured while saving the article");
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
    public async removeArticle(_id: string): Promise<IArticle> {
        try {
            const article = await Article.findById(_id);
            const result = await Article.deleteOne({ _id });
            if (result.deletedCount === 0) {
                throw error('a problem happened when deleting the article')
            }
            if (!article) {
                throw error('article not found')
            }
            return article;
        } catch (error) {
            console.error("Error getting articles:", error);
            throw error;
        }
    };
    public async modifyArticle(_id: string, data: { title: string; content: string; imageName: string; }): Promise<void> {
        if (!data.title || !data.content) {
            throw Error('problem with the sent data')
        }

        let article = await Article.findOneAndUpdate({ _id }, data, {
            new: true,
            runValidators: true,
        }).lean();
        if (!article) {
            throw Error('the article does not exist in the first place to be updated')
        }
    }
} 
