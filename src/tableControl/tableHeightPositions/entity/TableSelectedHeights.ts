import { TableHeight } from "../valueObects/TableHeight";

export class TableSelectedHeights {
  private selectedTableHeights: Array<TableHeight>;
  constructor(
    selectedTableHeights: Array<number>,
  ) {
    if (selectedTableHeights.length >= 10) {
      throw new Error("you can't save more than 10 heights");
    }
    this.selectedTableHeights = [];
    const existingHeight = new Set<number>();
    selectedTableHeights.forEach((tableHeight) => {
      if (existingHeight.has(tableHeight)) {
        console.log("this is the problem",tableHeight)
        throw new Error("heights should be distinct")
      }
      console.log("hey")
      existingHeight.add(tableHeight)
      this.selectedTableHeights.push(new TableHeight(tableHeight));
    });
  }
}

