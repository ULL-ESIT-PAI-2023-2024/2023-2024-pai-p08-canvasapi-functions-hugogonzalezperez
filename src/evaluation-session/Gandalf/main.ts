import { Character } from './Character.js';

const main = function (): void {
  const gandalf: Character = new Character('Gandalf', 17);
  gandalf.describe();

  const copiaGandalf: Character = gandalf.clone();
  copiaGandalf.describe();
}

main();