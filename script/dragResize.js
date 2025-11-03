function startDrag(e) {
    swiper.allowTouchMove = false;
    draggedElement = e.currentTarget;
    const rect = draggedElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
}

function drag(e) {
    const parentRect = draggedElement.parentElement.getBoundingClientRect();
    let newLeft = e.clientX - parentRect.left - offsetX;
    let newTop = e.clientY - parentRect.top - offsetY;
    newLeft = Math.max(0, Math.min(newLeft, parentRect.width - draggedElement.offsetWidth-15));
    newTop = Math.max(0, Math.min(newTop, parentRect.height - draggedElement.offsetHeight-15));
    draggedElement.style.left = newLeft + "px";
    draggedElement.style.top = newTop + "px";
    if (draggedElement.updateHandlePosition) draggedElement.updateHandlePosition();
}

function stopDrag(e) {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
    draggedElement = null;
    swiper.allowTouchMove = true;
}


function addResizeHandles(element) {
    const handle = document.createElement("div");
    handle.className = "resize-handle";

    handle.addEventListener("mousedown", (e) => {
        startResize(e, element);
    });

    if (element.tagName === "IMG") {
        element.resizeHandle = handle;
        element.parentElement.appendChild(handle);
        const updateHandlePosition = () => {
            handle.style.left = element.offsetLeft + element.offsetWidth - 10 + "px";
            handle.style.top = element.offsetTop + element.offsetHeight - 10 + "px";
        };
        element.updateHandlePosition = updateHandlePosition;
        updateHandlePosition();
    } else {
        handle.style.bottom = "-10px";
        handle.style.right = "-10px";
        element.appendChild(handle);
        element.resizeHandle = handle;
    }
}


function startResize(e, element) {

    isResizing = true;
    currentResizeHandle = element;
    resizeStartX = e.clientX;
    resizeStartY = e.clientY;

    if (element.classList.contains("image-element")) {
        resizeStartWidth = element.offsetWidth;
        resizeStartHeight = element.offsetHeight;
    } else {
        resizeStartWidth = parseInt(window.getComputedStyle(element).fontSize);
    }

    swiper.allowTouchMove = false;
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);
}

function resize(e) {
    const deltaX = e.clientX - resizeStartX;
    const deltaY = e.clientY - resizeStartY;
    const delta = Math.max(deltaX, deltaY);

    if (currentResizeHandle.classList.contains("image-element")) {
        const scaleX = (resizeStartWidth + deltaX) / resizeStartWidth;
        const scaleY = (resizeStartHeight + deltaY) / resizeStartHeight;
        const scale = Math.max(0.1, Math.min(5, Math.max(scaleX, scaleY)));
        const newWidth = Math.max(50, Math.min(500, resizeStartWidth * scale));
        const newHeight = Math.max(50, Math.min(500, resizeStartHeight * scale));
        currentResizeHandle.style.width = newWidth + "px";
        currentResizeHandle.style.height = newHeight + "px";
        currentResizeHandle.updateHandlePosition();
    } else if (currentResizeHandle.classList.contains("text-element")) {
        const newSize = Math.max(10, Math.min(100, resizeStartWidth + Math.floor(delta / 3)));
        currentResizeHandle.style.fontSize = newSize + "px";
        if (selectedTextElement === currentResizeHandle)
            document.getElementById("fontSize").value = newSize;
    }
}

function stopResize() {
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
    isResizing = false;
    currentResizeHandle = null;
   swiper.allowTouchMove = true
}