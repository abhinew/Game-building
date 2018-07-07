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
function pickUpItem() {

}
function equipWeapon() {

}
