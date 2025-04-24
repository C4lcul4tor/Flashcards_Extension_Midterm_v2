document.addEventListener("mouseup", () => {
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().trim() : "";
  
    if (selectedText.length > 0) {
      chrome.storage.local.set({ selectedText }, () => {
        console.log("Saved selectedText:", selectedText);
      });
    }
  });
