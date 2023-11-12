import { Response, Request } from "express";
import { TableHeightsInteractor } from "../../interactor/TableHeightsInteractor";
import { TableHeightsRepoImp } from "../persistenceLayer/repository/TableHeightsRepositoryImp";
import { ITableSelectedHeights } from "../persistenceLayer/TableHeightsDocument";

export class TableSelectedHeightsController {
  private tableHeightsInteractor = new TableHeightsInteractor(
    new TableHeightsRepoImp(),
  );

  public commitSelectedHeights = (req: Request, res: Response) => {
    try {
      console.log(req.user);
      const { selectedTableHeights, tableName } = req.body;
      console.log("ena dkhaaaalit", selectedTableHeights, tableName);
      this.tableHeightsInteractor.saveSelectedHeights(
        req.user.email + tableName,
        selectedTableHeights,
      );
      res.send("heights committed");
    } catch (error) {
      res.status(400).send(`problem when committing the heights: ${error}`);
    }
  };
  public getHeights = async (req: Request, res: Response) => {
    try {
      console.log(req.user.email + "hey");
      console.log(req.query.tableName);
      const tableHeights: ITableSelectedHeights =
        await this.tableHeightsInteractor.getTheHeightsOfTheTable(
          req.user.email + req.query.tableName,
        );
      console.log("result", tableHeights.selectedTableHeights);
      res.send(tableHeights.selectedTableHeights);
    } catch (error) {
      res.send([]);
    }
  };
}
