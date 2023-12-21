import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf from "../assets/Arcade_residentail_brochure_R2_compressed (1).pdf"

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 1400;

type PDFFile = string | File | null;

export default function Sample() {
  const [file, setFile] = useState<PDFFile>(pdf);
  const forBuild = (pdf: PDFFile) => setFile(pdf)
  console.log(forBuild);
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);


  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className=" overflow-hidden   p-6 ">
      {/* <div className="w-fit"> */}
      <div className="w-auto overflow-hidden overflow-y-scroll" ref={setContainerRef}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
            />
          ))}
        </Document>
      </div>
      {/* </div> */}
    </div>
  );
}