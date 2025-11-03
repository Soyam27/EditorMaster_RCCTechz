# EditorMaster

A simple, slide-based canvas editor you can open in the browser. Add text and images to phone-sized canvases, drag them around, resize, align with one click, and export the current slide as a JPG.


## Getting started

This is a pure front‑end project; no build step or server required.

- Quick start: Open `pages/index.html` in your browser.
	- On Windows, double‑click `pages/index.html` or drag it into a modern browser (Chrome, Edge, Firefox).
	- If you see the small‑device warning, widen the window or open on a larger display.

- Optional: run from a local server (sometimes helps with image security/CORS when exporting):
	- You can use any static server you prefer (e.g., VS Code Live Server extension).

## Project structure

```
EditorMaster/
├─ pages/
│  └─ index.html         
├─ public/
├─ script/
│  └─alignment.js
│  └─downloadFunction.js
│  └─dragResize.js
│  └─elementsPanel.js
│  └─imageElements.js
│  └─main.js
│  └─swiperSetup.js
│  └─textElements.js
│  └─utils.js
├─ styling/
│  └─ style.css           
└─ README.md              
```


## Features

- Slides and canvas
	- Phone-like canvas inside a Swiper carousel (multiple slides).
	- Default welcome text added to the first slide on load.
	- Small-screen warning overlay prevents usage on narrow devices (configurable via CSS).

- Elements
	- Text: add, drag, double‑click to edit inline, style via a side panel.
	- Images: add via file picker, drag, and resize with a handle.
	- Elements panel: every element you add appears in a list; clicking an item selects it and jumps to its slide.

- Drag & Resize
	- Dragging keeps elements within the canvas bounds.
	- Resize handle appears on the bottom-right of selected items.
	- Images resize proportionally (keeps aspect ratio).
	- Text resize handle adjusts font size (you can also change font size from the side panel).

- Text editing & styling
	- Inline editing: double‑click a text element to edit; press outside to save.
	- Panel controls:
		- Text (multi-line)
		- Font size, family, color
		- Bold, Italic, Underline
		- Text alignment: left/center/right/justify (affects the content inside the box)
	- Newlines from the panel’s text area are preserved on canvas.

- Alignment tools (element positioning)
	- Toolbar buttons for Left/Center/Right and Top/Middle/Bottom.
	- Element Align dropdowns in both Text and Image modifiers (reset to default after use).

- Export
	- Download the active canvas as JPG (via html2canvas).





## Usage tips

- Add text: Click “Add Text”, then drag it. Double‑click to edit. Use the side panel to style.
- Add image: Click “Add Image” and pick a file. Drag to position. Use the handle to resize.
- Select an element: Click it. A dashed outline and a blue handle appear.
- Alignment:
	- Use the toolbar buttons or the Element Align dropdowns to position within the canvas.
	- Text Align (in the text panel) centers/justifies the text contents, not the element itself.
- Elements list: Use it to jump to and select items quickly (also switches slide if needed).
- Export: Click “Download JPG” to save the currently visible slide’s canvas.

## Notes & limitations

- The Website is designed only for devices with screen width 900px and above.
- Download jpg button will work upon uncommenting this `<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>` from the index.html file





