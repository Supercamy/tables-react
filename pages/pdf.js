import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// import PDFFile from '@/components/Pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

const PDFFile = dynamic(() => import('../components/Pdf'), {
  ssr: false,
});

const PDF = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <PDFDownloadLink document={<PDFFile />} filename='FORM'>
      {/* {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        } */}
    </PDFDownloadLink>
  );
};

export default PDF;
