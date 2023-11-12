export class TableHeight {
  private height: number;
  constructor(height: number) {
    if (height < 70 && height > 120) throw new Error("height isn't valid");
    this.height = height;
  }
}
