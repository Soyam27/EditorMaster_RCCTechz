document.getElementById("addTextBtn").addEventListener("click", () => {
    const canvas = getCurrentCanvas();

    const textElement = document.createElement("div");
    textElement.className = "text-element";
    textElement.textContent = "I am Text";
    textElement.style.position = "absolute";
    textElement.style.fontSize = "16px";
    textElement.style.fontFamily = "Arial";
    textElement.style.color = "#000000";
    textElement.draggable = false;

    const pos = getRandomPosition(canvas);
    textElement.style.left = (pos.x - 50) + "px";
    textElement.style.top = (pos.y - 50) + "px";

    textElement.addEventListener("mousedown", startDrag);
    textElement.addEventListener("click", (e) => {
        selectTextElement(textElement);
    });
    textElement.addEventListener("dblclick", (e) => {
        makeTextEditable(textElement);
    });


    addResizeHandles(textElement);
    canvas.appendChild(textElement);
    addElementPanelEntry(textElement);
});

document.getElementById("addImageBtn").addEventListener("click", () => {
    document.getElementById("imageInput").click();
});

function selectTextElement(element) {
    deselectAll();
    addResizeHandles(element);
    element.classList.add("selected");
    selectedTextElement = element;
    element.resizeHandle.style.display = "block";
    const modifier = document.getElementById("textModifier");
    modifier.classList.remove("hidden");
    document.getElementById("textContent").value = element.textContent;
    document.getElementById("fontSize").value = parseInt(window.getComputedStyle(element).fontSize);
    document.getElementById("fontFamily").value = element.style.fontFamily;
    document.getElementById("textColor").value = rgbToHex(element.style.color); 
    document.getElementById("textBold").checked = element.style.fontWeight === "bold";
    document.getElementById("textItalic").checked = element.style.fontStyle === "italic";
    document.getElementById("textUnderline").checked = element.style.textDecoration === "underline";
    document.getElementById("textAlign").value = element.style.textAlign || "left";
    selectedImageElement = null;
    document.getElementById("imageModifier").classList.add("hidden");
    element.addEventListener("input", () => {
        document.getElementById("textContent").value = element.textContent;
    });
}


function makeTextEditable(element) {
    element.resizeHandle.style.display = "block";
    element.contentEditable = true;
    element.style.outline = "none";
    element.style.cursor = "text";
}


["fontSize", "fontFamily", "textColor", "textBold", "textItalic", "textUnderline", "textContent", "textAlign"].forEach((id) => {
    const ele = document.getElementById(id);
    ele.addEventListener("input", (e) => applyModifier(e, id));
    ele.addEventListener("change", (e) => applyModifier(e, id));
});

function applyModifier(e, id) {
    const val = e.target.value;
    switch (id) {
        case "fontSize":
            selectedTextElement.style.fontSize = val + "px";
            break;
        case "fontFamily":
            selectedTextElement.style.fontFamily = val;
            break;
        case "textColor":
            selectedTextElement.style.color = val;
            break;
        case "textBold":
            selectedTextElement.style.fontWeight = e.target.checked ? "bold" : "normal";
            break;
        case "textItalic":
            selectedTextElement.style.fontStyle = e.target.checked ? "italic" : "normal";
            break;
        case "textUnderline":
            selectedTextElement.style.textDecoration = e.target.checked ? "underline" : "none";
            break;
        case "textContent":
            selectedTextElement.textContent = val;
            break;
        case "textAlign":
            selectedTextElement.style.textAlign = val;
            break;
    }
}

document.getElementById("deleteText").addEventListener("click", () => {
    if (selectedTextElement) {
        if (selectedTextElement.panelItem) {
            selectedTextElement.panelItem.remove();
        }
        selectedTextElement.remove();
        selectedTextElement = null;
        document.getElementById("textModifier").classList.add("hidden");
    }
});