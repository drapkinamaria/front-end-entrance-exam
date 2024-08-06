import { setupEditable } from './editable.js';
import { setupMaterialWave } from './materialWave.js';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function downloadPDF() {
    const content = document.getElementById('app');

    html2canvas(content, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save('resume.pdf');
    });
}

document.getElementById('downloadPdf').addEventListener('click', downloadPDF);

setupEditable();
setupMaterialWave();
