import React from 'react';

function PDFVbestproject() {
  const pdfURL = 'https://drive.google.com/file/d/1phnFerrbW8LSJNuWhHBZlrfN0n72xZwH/view';

  return (
    <div>
      <embed src={pdfURL} width="50%" height="100px" />
    </div>
  );
}

export default PDFVbestproject;