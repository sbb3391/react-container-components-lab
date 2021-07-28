import React from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
  'Roboto': {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-Italic.ttf'
  }
};

const values = [
  {text: "This is test 1"},
  {text: "This is test 2"},
  {text: "This is test 3"},
  {text: "This is test 4"},
  {text: "This is test 5"},
  {text: "This is test 6"},
]

function pdf(props) {
  const dd = {
    info: {
      title: "First Proposal"
    },
    content: values
  }



  return (
    <div>
      <button onClick={() => {pdfMake.createPdf(dd).open()}}>Click to Try PDF</button>
    </div>
  );
}

export default pdf;
