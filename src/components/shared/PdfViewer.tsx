import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
// import pdf from "../assets/Arcade_residentail_brochure_R2_compressed (1).pdf";

import type { PDFDocumentProxy } from 'pdfjs-dist';
import FullPageLoading from '../extras/FullPageLoading';
// import CloseButton from '../options/CloseButton';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = window.innerWidth;

type PDFFile = string | File | null;

export default function Sample({ pdf }: { pdf: PDFFile }) {
  // const [file] = useState<PDFFile>(pdf);
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
  // const progress = 100/10;
  return (
    <div className=' w-full md:w-[80vw] mx-auto overflow-x-hidden overflow-y-scroll' style={{ height: `calc(100%)` }} ref={setContainerRef}>
      {/* progress */}
      {/* <div className=' absolute w-full h-10 bg-white top-0 left-0 z-10'>
        <div className={` h-full bg-accent w-[${progress}%]`}></div>
      </div> */}
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        loading={<FullPageLoading />}
        >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
            // width={maxWidth}
          />
        ))}
      </Document>
    </div>
  );
}
