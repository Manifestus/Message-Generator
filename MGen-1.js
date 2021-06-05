// Randomizer npc
const npcName = () => {
    const npcNameSelector = Math.floor(Math.random() * 6);
    switch(npcNameSelector){
        case 1: 
            return 'Goblin';
        break;
        case 2:
            return 'Ghoul';
        break;
        case 3:
            return 'Human';
        break;
        case 4:
            return 'Orc';
        break;
        case 5:
            return 'Elf';
        break;
        default:
            return 'Demon Lord';
        break;
    }
};

const npc = npcName();

//Randomize action

//User Input - got from Node.dev
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const awaitName = async () => {
      //finalize code adding new message at question
    const username = await readline.question(`What's your name? \n`, name => {
        readline.close()
      });
      return username;
  };

//User inputs actio

