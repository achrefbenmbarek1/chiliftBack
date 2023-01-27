// declare namespace Express {
//    export interface Request {
//       user?: string
//    }
// }
import {Request} from 'express';
export interface ExtendedRequest extends Request{
    user:any
} 
