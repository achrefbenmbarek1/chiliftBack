
import { IArticle } from "../odm/article";

export interface ArticleRepo{
    addArticle(title:string,imageName:string,content:string):Promise<void>;
    getArticles():Promise<IArticle[]>;
}
