// import { useCallback, useState } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
// import { pdfjs, Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf from "../assets/Arcade_residentail_brochure_R2_compressed (1).pdf";

// import type { PDFDocumentProxy } from 'pdfjs-dist';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();

// const options = {
//     cMapUrl: '/cmaps/',
//     standardFontDataUrl: '/standard_fonts/',
// };

// const resizeObserverOptions = {};

// const maxWidth = 1400;

// type PDFFile = string | File | null;

// export default function Sample() {
//     const [file, setFile] = useState<PDFFile>(pdf);
//     const [numPages, setNumPages] = useState<number>();
//     const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
//     const [containerWidth, setContainerWidth] = useState<number>();

//     const onResize = useCallback<ResizeObserverCallback>((entries) => {
//         const [entry] = entries;

//         if (entry) {
//             setContainerWidth(entry.contentRect.width);
//         }
//     }, []);

//     useResizeObserver(containerRef, resizeObserverOptions, onResize);

//     function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
//         setNumPages(nextNumPages);
//     }

//     return (
//         <div className=" overflow-hidden   p-6 ">
//             {/* <div className="w-fit"> */}
//                 <div className="w-auto overflow-hidden overflow-y-scroll" ref={setContainerRef}>
//                     <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
//                         {Array.from(new Array(numPages), (_, index) => (
//                             <Page
//                                 key={`page_${index + 1}`}
//                                 pageNumber={index + 1}
//                                 width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
//                             />
//                         ))}
//                     </Document>
//                 </div>
//             {/* </div> */}
//         </div>
//     );
// }

import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props: any) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let instance, PSPDFKit: any;

        (async function () {
            PSPDFKit = await import("pspdfkit");

            PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

            instance = await PSPDFKit.load({
                // Container where PSPDFKit should be mounted.
                container,
                // The document to open.
                document: props.document,
                // Use the Vite-specific import.meta.env to get the base URL.
                baseUrl: `${window.location.origin}${import.meta.env.BASE_URL}`,
            });
        })();

        return () => PSPDFKit && PSPDFKit.unload(container);
    }, [props.document]);

    return (
        <div className="justify-center items-center flex overflow-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className="relative w-5/6 md:w-4/5 lg:w-4/5 xl:w-2/5 my-6 mx-auto h-4/5 lg:h-4/6 md:h-4/5">
                <div
                    ref={containerRef}
                    style={{
                        width: "80rem",
                        height: "90vh",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "10px",
                    }}
                />
            </div>
        </div>
    );
}
