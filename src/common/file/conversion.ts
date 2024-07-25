import { RecordFileFormat } from "./record";

export type BatchConversionResult = {
  success: { [format in RecordFileFormat]?: number };
  successTotal: number;
  failed: { [format in RecordFileFormat]?: number };
  failedTotal: number;
  skipped: { [format in RecordFileFormat]?: number };
  skippedTotal: number;
};
