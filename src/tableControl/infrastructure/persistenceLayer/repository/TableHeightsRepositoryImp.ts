import TableSelectedHeights, {
  ITableSelectedHeights,
} from "../TableHeightsDocument";
import { TableHeightsRepo } from "./TableHeightsRepository";

export class TableHeightsRepoImp implements TableHeightsRepo {
  public async saveHeights(
    id: string,
    tableHeights: Array<number>,
  ): Promise<void> {
    try {
      // console.log(tableHeights);
      // const tableSelectedHeights = new TableSelectedHeights({
      //   heightsIdentifier: id,
      //   selectedTableHeights: tableHeights,
      // });
      // console.log("dkhalit3", tableSelectedHeights);
      // await tableSelectedHeights.save();
      const filter = { heightsIdentifier: id };
      const update = { selectedTableHeights: tableHeights };
      const options = { upsert: true, new: true };
      const result = await TableSelectedHeights.findOneAndUpdate(
        filter,
        update,
        options,
      );

      console.log(result);
    } catch (error: any) {
      throw new Error(`a problem occured while saving the heights ${error}`);
    }
  }
  public async getHeights(id: string): Promise<ITableSelectedHeights> {
    try {
      const tableHeights = await TableSelectedHeights.findOne({
        heightsIdentifier: id,
      });
      if (!tableHeights) {
        console.log("make sure that the table has already been saved heights");
        throw new Error("make sure that the table has already saved heights");
      }
      return tableHeights;
    } catch (error) {
      console.error("Error getting heights:", error);
      throw error;
    }
  }
}
