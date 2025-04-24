export class Flashcard {
    front: string;
    back: string;
  
    constructor(front: string, back: string) {
      if (!front || !back) {
        throw new Error("Both front and back must be non-empty strings.");
      }
      this.front = front;
      this.back = back;
    }
  
    updateBack(newBack: string): void {
      if (!newBack) {
        throw new Error("Back must be a non-empty string.");
      }
      this.back = newBack;
    }
  
    toJSON(): { front: string; back: string } {
      return {
        front: this.front,
        back: this.back,
      };
    }
  
    static fromJSON(json: { front: string; back: string }): Flashcard {
      return new Flashcard(json.front, json.back);
    }
  }
  