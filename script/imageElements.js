document.getElementById("imageInput").addEventListener("change", (e) => {
    const file = e.target.files[0];

    const canvas = getCurrentCanvas();

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.className = "image-element";
        img.style.position = "absolute";
        img.style.width = "150px";
        img.style.height = "auto";
        img.draggable = false;

        const pos = getRandomPosition(canvas);
        img.style.left = pos.x + "px";
        img.style.top = pos.y + "px";

        img.addEventListener("click", (e) => {
            selectImageElement(img);
        });
       
        img.addEventListener("mousedown", (e) => {
            if (!e.target.classList.contains("resize-handle")) startDrag.call(img, e);
        });
        canvas.appendChild(img);
        setTimeout(() => {
            addResizeHandles(img);
            selectImageElement(img);
            addElementPanelEntry(img);
        }, 50);
    };
    
    e.target.value = "";
});

function selectImageElement(element) {
    deselectAll();
    selectedImageElement = element;
    element.classList.add("selected");
    addResizeHandles(element);
    makeImageEditable(element);
    if (element.resizeHandle) {
        element.resizeHandle.style.display = "block";
        element.updateHandlePosition();
    }
    zIndex += 1;
    element.style.zIndex = zIndex;
    document.getElementById("textModifier").classList.add("hidden");
    selectedTextElement = null;

}




function makeImageEditable(element) {
    const editableBox = document.getElementById("imageModifier");
    if (element.classList.contains("selected")) {
        editableBox.style.display = "flex";
        editableBox.classList.remove("hidden");

    }
    editableBox.classList.add("hidden");

}

document.getElementById("deleteImage").addEventListener("click", () => {
    if (selectedImageElement) {
        if (selectedImageElement.panelItem) {
            selectedImageElement.panelItem.remove();
        }
        if (selectedImageElement.resizeHandle) {
            selectedImageElement.resizeHandle.style.display = "none";
        }
        selectedImageElement.remove();
        selectedImageElement = null;
        document.getElementById("imageModifier").style.display = "none";
    }
});