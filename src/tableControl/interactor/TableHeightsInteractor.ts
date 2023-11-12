import { TableHeightsRepo } from "../infrastructure/persistenceLayer/repository/TableHeightsRepository";
import { ITableSelectedHeights } from "../infrastructure/persistenceLayer/TableHeightsDocument";
import { TableSelectedHeights } from "../tableHeightPositions/entity/TableSelectedHeights";
export class TableHeightsInteractor {
  private tableSelectedHeightsRepo: TableHeightsRepo;
  constructor(tableSelectedHeightsRepo: TableHeightsRepo) {
    this.tableSelectedHeightsRepo = tableSelectedHeightsRepo;
  }
  public async saveSelectedHeights(
    id: string,
    selectedHeights: Array<number>,
  ): Promise<void> {
    console.log("dkhalit");
    const tableSelectedHeights = new TableSelectedHeights(selectedHeights);
    console.log("dkhalit2", tableSelectedHeights);
    await this.tableSelectedHeightsRepo.saveHeights(id, selectedHeights);
  }
  public async getTheHeightsOfTheTable(
    id: string,
  ): Promise<ITableSelectedHeights> {
    try {
      console.log("id", id);
      const tableSelectedHeights: ITableSelectedHeights =
        await this.tableSelectedHeightsRepo.getHeights(id);
      console.log(tableSelectedHeights);
      return tableSelectedHeights;
    } catch (error) {
      throw error;
    }
  }
}
