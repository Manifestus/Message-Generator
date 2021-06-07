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
const actionRandomizer = () => {
    const actionSelector = Math.floor(Math.random() * 6);
    switch(actionSelector){
        case 1: 
            return ' got killed by ';
        break;
        case 2:
            return ' run away from ';
        break;
        case 3:
            return ' inflicted small damage to ';
        break;
        case 4: 
            return ' inflicted heavy damage to ';;
        break;
        case 5:
            return ' got crippled from ';
        break;
        default:
            return ' insta-killed ';
        break;
    }
};

const action = actionRandomizer();

//User Input - got from Node.dev
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {

    console.log(`${name}${action}${npc}`);
    rl.close();
});
