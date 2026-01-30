// Show a Google Sheet directly in the preview iframe
function openSheet(sheetUrl) {
  const frame = document.getElementById("previewFrame");
  const idleGif = document.getElementById("idleGif");

  // Hide idle GIF once a tab is selected
  idleGif.style.display = "none";
  idleGif.style.opacity = "0";

  // Show iframe with the sheet
  frame.style.display = "block";
  frame.style.opacity = "1";
  frame.src = sheetUrl;
}

// Reset back to idle state (used for blank placeholder tabs)
function resetPreview() {
  const frame = document.getElementById("previewFrame");
  const idleGif = document.getElementById("idleGif");

  // Clear iframe and hide it
  frame.src = "";
  frame.style.display = "none";
  frame.style.opacity = "0";

  // Show idle GIF again
  idleGif.style.display = "block";
  idleGif.style.opacity = "1";
}

// Initialize with idle GIF visible on page load
document.addEventListener("DOMContentLoaded", () => {
  resetPreview();
});
