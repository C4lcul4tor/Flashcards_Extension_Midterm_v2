# 📘 Spec — Flashcards Chrome Extension Midterm

## Overview

This Chrome Extension allows users to highlight text from any webpage and instantly turn it into a flashcard. The flashcards are saved locally and can be reviewed, navigated, deleted, and exported to JSON from the extension popup.

The focus of the project was to apply sound software engineering practices: modular design, testing, version control, and clean, maintainable code.

---

## Functional Requirements

- ✅ Capture highlighted text on any webpage using a content script
- ✅ Autofill the "Front" of a flashcard with selected text
- ✅ Input custom "Back" answer
- ✅ Save flashcard to Chrome's local storage
- ✅ Navigate (Next/Prev), review, and delete flashcards
- ✅ Export flashcards as JSON for backup or import
- ✅ Display flashcards in a styled card layout

---

## Technical Stack

- Chrome Extension APIs (content script, local storage)
- TypeScript
- Jest for unit testing
- HTML/CSS (custom layout with Google Fonts)
- Git for version control

---

## Abstract Data Type (ADT)

```ts
class Flashcard {
  constructor(public front: string, public back: string) { ... }
  toJSON(): object
  static fromJSON(obj): Flashcard
}
