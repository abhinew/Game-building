// Write your JS here
let hero = {
    name: "Abhi",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "string",
        damage: 2
    }
}
function rest(testCreature2) {
    testCreature2.health = 10;
    return testCreature2;
}
const innUI = document.getElementById("inn");
innUI.addEventListener("click", function() {
    hero.health = 10;
}); 

function pickUpItem(testHero, testObject) {
    testHero.inventory.push(testObject); 
}

const inventoryCount = hero.inventory.length;
document.getElementById("dagger").addEventListener("click", function() {
    hero.inventory.push({type: "dagger", damage: 2});
});

function equipWeapon(testHero) {
    if(testHero.inventory.length != 0) {
        testHero.weapon = testHero.inventory[0];
    }
}
const bagUI = document.getElementById("bag");
bagUI.addEventListener("click", function() {
    hero.weapon = hero.inventory[0];
});
