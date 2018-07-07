// Write your JS here
let hero = {
    name: "Abhi",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "explosives",
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

//Write displayStats function that writes your hero's name, health, weapontype, weapon damage to the page. 
//define a function to display  hero's data on the page
// assign the hero data as content to the list 
//Call it at the end of your script

function displayStats() {
    let heroAttributes = document.getElementById("hero-attributes").children;
    console.log(heroAttributes);
    heroAttributes[0].innerText = hero.name;
    heroAttributes[1].innerText = hero.health;
    heroAttributes[2].innerText = hero.weapon.type;
    heroAttributes[3].innerText = hero.weapon.damage;
}

displayStats();