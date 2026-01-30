function openSheet(sheetUrl) {
  const frame = document.getElementById("previewFrame");

  // Show the iframe and load the sheet
  frame.style.display = "block";
  frame.src = sheetUrl;
}
