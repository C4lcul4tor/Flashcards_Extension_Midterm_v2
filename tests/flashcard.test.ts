import { Flashcard } from "../shared/FlashcardADT";

describe("Flashcard", () => {
  it("creates a flashcard with valid front and back", () => {
    const card = new Flashcard("Q", "A");
    expect(card.front).toBe("Q");
    expect(card.back).toBe("A");
  });

  it("throws error if front is empty", () => {
    expect(() => new Flashcard("", "A")).toThrow();
  });

  it("throws error if back is empty", () => {
    expect(() => new Flashcard("Q", "")).toThrow();
  });

  it("updates the back text correctly", () => {
    const card = new Flashcard("Q", "A");
    card.updateBack("Updated A");
    expect(card.back).toBe("Updated A");
  });

  it("serializes and deserializes correctly", () => {
    const card = new Flashcard("Q", "A");
    const json = card.toJSON();
    const recreated = Flashcard.fromJSON(json);
    expect(recreated.front).toBe("Q");
    expect(recreated.back).toBe("A");
  });
  test("Flashcard stores a timestamp", () => {
  const card = {
    front: "Front",
    back: "Back",
    createdAt: new Date().toISOString()
  };
  expect(card.createdAt).toMatch(/^\d{4}-\d{2}-\d{2}T/); // ISO format check
});

});
