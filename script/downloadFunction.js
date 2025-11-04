const downloadCanvasBtn = document.getElementById("downloadCanvasBtn");
downloadCanvasBtn.addEventListener('click', downloadCurrentCanvasJPG);

async function downloadCurrentCanvasJPG() {

    try {
        deselectAll();
        const canvasDiv = getCurrentCanvas();
        const exportCanvas = await html2canvas(canvasDiv, {
            backgroundColor: '#ffffff',
            scale: 2,
        });

        const dataURL = exportCanvas.toDataURL('image/jpeg', 0.92);
        const activeSlide = document.querySelector('.swiper-slide-active .canvas');
        const slideNum = activeSlide ? activeSlide.getAttribute('data-canvas') : '1';
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `canvas-slide-${slideNum}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        alert('Uncomment the html2canvas script in index.html to enable download feature.');
        return;
    }

}
