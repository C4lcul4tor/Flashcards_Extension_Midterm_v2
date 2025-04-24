# spec.md

## Project Title
Flashcards with Gesture Controls (Midterm Project)

## Overview
This Chrome extension allows users to:
- Highlight any text on a web page
- Turn it into a flashcard (with front and back sides)
- Store flashcards for later review
- Use **hand gestures** (via webcam + TensorFlow.js) to rate how well they remembered each flashcard.

## Features
1. **Capture Highlighted Text**
   - User highlights text and clicks an icon to save it as a flashcard.
2. **Flashcard Data Structure**
   - Each flashcard has a front (question) and back (answer).
   - Stored locally using `chrome.storage.local`
3. **Popup Interface**
   - List of flashcards appears in a popup window.
   - Can review cards one-by-one.
4. **Gesture Controls**
   - Webcam detects:
     - 👍 Thumbs Up = Easy
     - 👎 Thumbs Down = Hard
     - 🖐 Flat Hand = Didn't Know
5. **(Optional) Cloud Storage**
   - Future improvement to store cards in Airtable or Supabase.

## Tools & Tech
- TypeScript
- Jest (for tests)
- TensorFlow.js HandPose Model
- Chrome Extension APIs
- Git + GitHub

## Goals
- Focus on clean code, modular structure, and testable components.
- Emphasize engineering process (planning, testing, AF/RI).
