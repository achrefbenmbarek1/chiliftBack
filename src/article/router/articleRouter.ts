import { Router } from 'express';
import { Response, Request } from 'express'
import { authMiddleware } from '../../shared/authentification/Middlewares/AuthTokenRequired';
import { ArticleController } from '../controller/ArticleController'
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/imagesArticle');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
});

const upload = multer({
    limits: {
        fileSize: 5000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            return cb(new Error('please upload an image'));
        }
        cb(null, true);
    },
    storage: storage
});

export const articleRouter = Router();
const articleController = new ArticleController();
articleRouter.post('/', articleController.createArticle);
articleRouter.post('/upload', upload.single('file'), articleController.uploadImage);
articleRouter.get('/all', articleController.retrieveArticles);
articleRouter.delete('/:_id', articleController.deleteArticle);
articleRouter.patch('/:_id', articleController.modifyArticle);
 
