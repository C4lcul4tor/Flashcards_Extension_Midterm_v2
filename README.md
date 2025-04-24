# 🧠 Flashcards Chrome Extension — Midterm Project

This is a Chrome extension that helps users create flashcards from highlighted web text. It supports saving, reviewing, deleting, and exporting flashcards — all from a sleek and clean popup UI.

---

## 🌟 Features

- 📝 Highlight text → Autofills front of flashcard
- 💭 Add your answer → Save card
- 📖 Review cards inside popup
- ⬅➡ Navigate with Prev / Next
- 🗑 Delete individual flashcards
- 📤 Export flashcards as JSON
- 🎨 Clean UI with icons, rounded cards, and animations

---

## 🛠️ Tech Stack

- TypeScript
- Chrome Extension API
- Jest (unit testing)
- HTML/CSS with Poppins font
- Google Fonts, icons, and CSS transitions

---

## 📂 Directory Structure

flashcards-extension-midterm/
│
├── extension/
│   ├── manifest.json               # Extension configuration
│   └── popup/
│       ├── popup.html             # UI structure for popup
│       ├── popup.js               # Logic: save, navigate, delete, export
│       ├── popup.css              # Fancy styling (icons, layout, fonts)
│       └── content.js             # Captures highlighted text from webpages
│
├── src/
│   └── FlashcardADT.ts            # Flashcard class with to/from JSON
│
├── tests/
│   └── flashcard.test.ts          # Jest unit tests for Flashcard ADT
│
├── spec.md                        # Project specification and requirements
├── todo.md                        # Checklist of completed phases
├── prompt_plan.md                 # (Optional) How LLMs helped plan/code
├── README.md                      # Project overview, features, setup
│
├── tsconfig.json                  # TypeScript compiler config
├── jest.config.js                 # Jest testing setup
├── package.json                   # NPM scripts and dependencies
├── package-lock.json              # Locked versions of dependencies
