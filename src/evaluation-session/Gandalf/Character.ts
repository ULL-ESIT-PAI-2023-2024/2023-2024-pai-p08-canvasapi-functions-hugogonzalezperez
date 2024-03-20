export class Character {
  constructor(public name: string, public position: number) {}

  describe(): void {
    console.log(`Name: ${this.name}, Position: ${this.position}`);
  }

  clone(): Character {
    return new Character(this.name, this.position);
  }
}