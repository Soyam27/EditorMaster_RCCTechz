const elementAlignText = document.getElementById("elementAlignText");
const elementAlignImage = document.getElementById("elementAlignImage");


if (elementAlignText) elementAlignText.addEventListener('change', (e) => {
    const fieldValue = e.target.value;
    alignSelected(fieldValue);
});
if (elementAlignImage) elementAlignImage.addEventListener('change', (e) => {
    const fieldValue = e.target.value;
    alignSelected(fieldValue);
});

function getSelectedElement() {
    return selectedTextElement || selectedImageElement || null;
}

function alignSelected(direction) {
  const ele = getSelectedElement();
  const canvas = ele.closest('.canvas');


  const cW = canvas.offsetWidth;
  const cH = canvas.offsetHeight;
  const eW = ele.offsetWidth;
  const eH = ele.offsetHeight;

  let left = ele.offsetLeft;
  let top = ele.offsetTop;

  switch (direction) {
    case 'left':
      left = 0;
      break;
    case 'center':
      left = Math.max(0, Math.round((cW - eW) / 2));
      break;
    case 'right':
      left = Math.max(0, cW - eW-15);
      break;
    case 'top':
      top = 0;
      break;
    case 'middle':
      top = Math.max(0, Math.round((cH - eH) / 2));
      break;
    case 'bottom':
      top = Math.max(0, cH - eH-15);
      break;
  }
  elementAlignText.value = 'default';
      elementAlignImage.value = 'default';

  ele.style.left = `${left}px`;
  ele.style.top = `${top}px`;
  ele.updateHandlePosition();

}