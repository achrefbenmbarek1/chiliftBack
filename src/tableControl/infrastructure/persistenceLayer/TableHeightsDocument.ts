import mongoose, { Schema, Document } from "mongoose";

export interface ITableHeight extends Document {
  height: number;
}

// const tableHeightSchema: Schema = new Schema({
//   height: {
//     type: Number,
//     required: true,
//   },
// });

export interface ITableSelectedHeights extends Document {
  heightsIdentifier: string;
  selectedTableHeights: ITableHeight[];
}

const tableSelectedHeightsSchema: Schema = new Schema({
  heightsIdentifier: {
    type: String,
    unique: true,
    required: true,
  },
  selectedTableHeights: [Number],
});

const TableSelectedHeights = mongoose.model<ITableSelectedHeights>(
  "TableSelectedHeights",
  tableSelectedHeightsSchema,
);

export default TableSelectedHeights;
