import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { motion } from "framer-motion";
import "../../index.css"

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


type PDFFile = string | File | null;

export default function Sample({ pdf }: { pdf: PDFFile }) {
  // const [file] = useState<PDFFile>(pdf);
  const [numPages, setNumPages] = useState<number>();
  const [containerRef] = useState<HTMLElement | null>(null);
  // const [ setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      // setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }
  let maxwidth = window.innerWidth / (3 / 2)
  
  console.log(maxwidth)
  console.log(window.innerWidth)
  return (
    <motion.div initial={{
      translateX: 0
    }}
      animate={{
        translateX: 40
      }}
      transition={{
        duration: 0.5
      }}
      className=' w-full md:w-[66vw]  mx-auto overflow-x-hidden overflow-y-scroll' style={{ height: `calc(100%)` }}>
    
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
            // width={window.innerWidth / (3 / 2)}
            width={maxwidth}
          />
        ))}
      </Document>
    </motion.div>
  );
}
