import { PDFDocumentProxy } from 'pdfjs-dist/types/display/api';
import { DefineComponent } from 'vue';

export interface VuePdfEmbedProps {
  disableAnnotationLayer?: boolean;
  disableTextLayer?: boolean;
  height?: number | string;
  page?: number;
  rotation?: number | string;
  source: object | string | Uint8Array;
  width?: number | string;
  margin?: number;
}

export interface VuePdfEmbedData {
  document: PDFDocumentProxy | null;
  pageCount: number;
  pageNums: number[];
}

export const VuePdfEmbed: DefineComponent<
  VuePdfEmbedProps,
  unknown,
  VuePdfEmbedData
>;

export default VuePdfEmbed;
