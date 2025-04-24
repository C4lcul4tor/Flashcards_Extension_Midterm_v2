 
console.log("Popup script loaded ✅");

document.addEventListener("DOMContentLoaded", () => {
  const frontInput = document.getElementById("front") as HTMLTextAreaElement;
  const backInput = document.getElementById("back") as HTMLTextAreaElement;
  const saveButton = document.getElementById("save") as HTMLButtonElement;
  const output = document.getElementById("output") as HTMLDivElement;

  chrome.storage.local.get(["selectedText"], (result) => {
    if (result.selectedText) {
      frontInput.value = result.selectedText;
    }
  });

  saveButton.addEventListener("click", () => {
    const flashcard = {
      front: frontInput.value,
      back: backInput.value,
    };

    chrome.storage.local.get(["flashcards"], (result) => {
      const flashcards = result.flashcards || [];
      flashcards.push(flashcard);

      chrome.storage.local.set({ flashcards }, () => {
        output.textContent = "Flashcard saved!";
        backInput.value = "";
      });
    });
  });
});
