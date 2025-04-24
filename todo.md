# todo.md

## 📦 Setup & Planning
- [x] Create folder structure and GitHub repo
- [x] Add and push empty files to GitHub
- [x] Write spec.md (project description)
- [x] Write todo.md (this checklist)

## 🧱 Flashcard ADT
- [ ] Create `FlashcardADT.ts` with:
  - [ ] Fields: frontText, backText
  - [ ] Methods: getFront(), getBack(), updateBack()
  - [ ] AF, RI, checkRep()
- [ ] Write unit tests for ADT in `flashcard.test.ts`

## 🌐 Chrome Extension
- [ ] Write `manifest.json` with permissions and scripts
- [ ] Create `content.js` to capture selected text
- [ ] Create `popup.html`, `popup.ts`, `popup.css`
- [ ] Add UI to display and save flashcards

## 💾 Flashcard Storage
- [ ] Use `chrome.storage.local` to store flashcards
- [ ] Load flashcards in popup

## ✋ Hand Gesture Detection
- [ ] Setup webcam capture in popup
- [ ] Load TensorFlow.js HandPose model
- [ ] Detect gestures:
  - 👍 Thumbs Up = Easy
  - 👎 Thumbs Down = Hard
  - 🖐 Flat Hand = Didn't Know
- [ ] Map gestures to flashcard ratings

## 🔄 Review Mode
- [ ] Show one card at a time
- [ ] Use gesture input to record result
- [ ] Update next card

## 📚 Final Polish
- [ ] Write README.md with instructions
- [ ] Record demo video
- [ ] Push everything to GitHub with good commit messages
