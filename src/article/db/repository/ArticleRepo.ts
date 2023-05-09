
import { IArticle } from "../odm/article";

export interface ArticleRepo{
    addArticle(title:string,imageName:string,content:string):Promise<void>;
    getArticles():Promise<IArticle[]>;
    removeArticle(_id:string):Promise<IArticle>
    modifyArticle(_id:string, data:{title:string, content:string, imageName:string}):Promise<void>
}
