
let elementCounter = 0; 

(function addDefaultWelcomeText() {
    const firstCanvas = document.querySelector('.canvas[data-canvas="1"]');
    const secondCanvas = document.querySelector('.canvas[data-canvas="2"]');
    const thirdCanvas = document.querySelector('.canvas[data-canvas="3"]');
    if (!firstCanvas) return;

    const textElement = document.createElement("div");
    textElement.className = "text-element";
    textElement.innerHTML = "This is your Editor Master!";
    textElement.style.position = "absolute";
    textElement.style.fontSize = "20px";
    textElement.style.fontFamily = "Arial";
    textElement.style.color = "#000000";
    textElement.draggable = false;

    const imageElement = document.createElement("img");
    imageElement.className = "image-element";
    imageElement.style.position = "absolute";
    imageElement.src = "../public/background.jpg"; 
    imageElement.alt = "Default Image";
    imageElement.draggable = false;
    imageElement.style.width = "950px";
    imageElement.style.height = "1000px";
    imageElement.draggable = false;

  

    const imageElement3 = document.createElement("img");
    imageElement3.className = "image-element";
    imageElement3.style.position = "absolute";
    imageElement3.src = "../public/background.jpg"; 
    imageElement3.alt = "Default Image";
    imageElement3.draggable = false;
    imageElement3.style.width = "950px";
    imageElement3.style.height = "1000px";
    imageElement3.draggable = false;


    const approxWidth = 260; 
    const approxHeight = 30;
    const centerX = (firstCanvas.offsetWidth - approxWidth) / 2;
    const centerY = (firstCanvas.offsetHeight - approxHeight) / 2;
    textElement.style.left = Math.max(0, centerX) + "px";
    textElement.style.top = Math.max(0, centerY) + "px";

    textElement.addEventListener("mousedown", startDrag);
    textElement.addEventListener("click", () => selectTextElement(textElement));
    textElement.addEventListener("dblclick", () => makeTextEditable(textElement));
    textElement.addEventListener("dragstart", (e) => e.preventDefault());
    
    imageElement3.addEventListener("click", () => selectImageElement(imageElement3));
    imageElement3.addEventListener("dragstart", (e) => e.preventDefault()); 
    imageElement3.addEventListener("mousedown", (e) => {
        if (!e.target.classList.contains("resize-handle")) startDrag.call(imageElement3, e);
    }   );     

    addResizeHandles(textElement);
    addResizeHandles(textElement);

   
    firstCanvas.appendChild(textElement);
    thirdCanvas.appendChild(imageElement3);

    addElementPanelEntry(textElement);
    addElementPanelEntry(imageElement3);
})();

