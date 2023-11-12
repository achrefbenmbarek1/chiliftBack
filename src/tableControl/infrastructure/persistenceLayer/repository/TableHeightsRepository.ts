import { ITableSelectedHeights } from "../TableHeightsDocument";

export interface TableHeightsRepo{
    saveHeights(id:string, tableHeights:Array<number>):Promise<void>;
    getHeights(id:string):Promise<ITableSelectedHeights>;
}

