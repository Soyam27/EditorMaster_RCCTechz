function getRandomPosition(canvas) {
    const centerX = (canvas.offsetWidth) / 2;
    const centerY = (canvas.offsetHeight) / 2;
    const offsetRange = 80;
    const randomOffsetX = Math.floor(Math.random() * offsetRange * 2) - offsetRange;
    const randomOffsetY = Math.floor(Math.random() * offsetRange * 2) - offsetRange;
    return { x: centerX + randomOffsetX, y: centerY + randomOffsetY };
}

function getCurrentCanvas() {
    const activeSlide = document.querySelector(".swiper-slide-active");
    return activeSlide ? activeSlide.querySelector(".canvas") : null;
}

function deselectAll() {
    document.querySelectorAll(".text-element, .image-element").forEach((ele) => {
        ele.classList.remove("selected");
        if (ele.resizeHandle) ele.resizeHandle.style.display = "none";
    });
    selectedTextElement = null;
    selectedImageElement = null;
    document.getElementById("imageModifier").style.display = "none";
    document.getElementById("textModifier").classList.add("hidden");
    
}

document.querySelectorAll(".canvas").forEach((canvas) => {
    canvas.addEventListener("click", (e) => {
        const withinElement = e.target.closest('.text-element, .image-element');
        if (!withinElement) {
            if (selectedTextElement) {
                selectedTextElement.style.cursor = "move";
                selectedTextElement.contentEditable = "false";
            }
            deselectAll();
        }
    });
});

function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g);
    const [r, g, b] = result.map((x) => parseInt(x));
    return (
        "#" +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
    );
}

