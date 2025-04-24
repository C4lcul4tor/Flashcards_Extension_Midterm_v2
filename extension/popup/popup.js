let currentIndex = 0;
let flashcards = [];

document.addEventListener("DOMContentLoaded", () => {
  const frontInput = document.getElementById("front");
  const backInput = document.getElementById("back");
  const saveButton = document.getElementById("save");
  const output = document.getElementById("output");

  const displayFront = document.getElementById("display-front");
  const displayBack = document.getElementById("display-back");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  const deleteButton = document.getElementById("delete");
  const exportButton = document.getElementById("export");

  // Load highlighted text
  chrome.storage.local.get(["selectedText"], (result) => {
    if (result.selectedText) {
      frontInput.value = result.selectedText;
    }
  });

  // Load flashcards
  chrome.storage.local.get(["flashcards"], (result) => {
    flashcards = result.flashcards || [];
    showCard();
  });

  // Save new flashcard
  saveButton.addEventListener("click", () => {
    const flashcard = {
      front: frontInput.value.trim(),
      back: backInput.value.trim()
    };

    if (!flashcard.front || !flashcard.back) {
      output.textContent = "Both fields are required!";
      return;
    }

    flashcards.push(flashcard);
    chrome.storage.local.set({ flashcards }, () => {
      output.textContent = "Flashcard saved!";
      backInput.value = "";
      currentIndex = flashcards.length - 1;
      showCard();
    });
  });

  nextButton.addEventListener("click", () => {
    if (flashcards.length > 0) {
      currentIndex = (currentIndex + 1) % flashcards.length;
      showCard();
    }
  });

  prevButton.addEventListener("click", () => {
    if (flashcards.length > 0) {
      currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
      showCard();
    }
  });

  deleteButton.addEventListener("click", () => {
    if (flashcards.length === 0) return;

    flashcards.splice(currentIndex, 1);
    if (currentIndex >= flashcards.length) {
      currentIndex = flashcards.length - 1;
    }

    chrome.storage.local.set({ flashcards }, () => {
      showCard();
      output.textContent = "Flashcard deleted!";
    });
  });

  exportButton.addEventListener("click", () => {
    const dataStr = JSON.stringify(flashcards, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "flashcards.json";
    a.click();

    URL.revokeObjectURL(url);
    output.textContent = "Flashcards exported!";
  });

  function showCard() {
    if (flashcards.length === 0) {
      displayFront.textContent = "(no cards yet)";
      displayBack.textContent = "";
    } else {
      const card = flashcards[currentIndex];
      displayFront.textContent = card.front;
      displayBack.textContent = card.back;
    }
  }
});
