import { ArticleInteractor } from '../model/interactor/ArticleInteractor';
import { Response, Request } from 'express'
import { ArticleRepoImpl } from '../db/repository/ArticleRepoImp';
import { IArticle } from '../db/odm/article';
import path from 'path';

export class ArticleController {
    private articleInteractor = new ArticleInteractor(new ArticleRepoImpl());

    public createArticle = (req: Request, res: Response) => {
        try {
            this.articleInteractor.addArticle(req.body.title, req.body.imageName, req.body.content);
            res.send("article created succesfully");
        } catch (error) {
            res.status(400).send(`problem when submitting the feedback ${error}`)
        }

    }
    public retrieveArticles = async (req: Request, res: Response) => {
        try {
            const articles: IArticle[] = await this.articleInteractor.retrieveArticles();
            res.send(articles);
        } catch (error) {
            res.sendStatus(400);
        }
    }

    public uploadImage = async (req: Request, res: Response) => {
        try {
            const file = req.file as Express.Multer.File;
            const imageName = path.basename(file.path);
            res.send(imageName);
        } catch (error) {
           res.status(500).send("problem when uploading the file") 
        }
    }
}

