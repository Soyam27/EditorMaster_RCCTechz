const elementsList = document.getElementById("elementsList");

function addElementPanelEntry(element) {
    const canvas = element.closest('.canvas');
    const slideNumber = canvas ? parseInt(canvas.dataset.canvas || '1') : 1;
    const type = element.tagName === 'IMG' ? 'Image' : 'Text';
    if(type=="Image"){
        imageCounter += 1;
    }
    else if(type=="Text"){
        textCounter += 1;
    }

    const item = document.createElement('div');
    item.className = 'element-item';
    item.textContent = `${type}-${type === 'Image' ? imageCounter : textCounter} :  (Slide ${slideNumber})`;

    item.targetElement = element;
    element.panelItem = item;

    elementsList.appendChild(item);

    item.addEventListener('click', () => {
        swiper.slideTo(slideNumber - 1);
            if (type === 'Image') {
                selectImageElement(element);
            } else {
                selectTextElement(element);
            }
            if (element.resizeHandle) element.resizeHandle.style.display = 'block';
    });

   
}