import { setupEditable } from './editable.js';
import { setupMaterialWave } from './materialWave.js';
import { jsPDF } from 'jspdf';

function downloadPDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const content = document.getElementById('app');

    doc.html(content, {
        callback: function (doc) {
            doc.save('resume.pdf');
        },
        x: 10,
        y: 10
    });
}

document.getElementById('downloadPdf').addEventListener('click', downloadPDF);

setupEditable();
setupMaterialWave();
