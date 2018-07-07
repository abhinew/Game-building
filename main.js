// Write your JS here
let hero = {
    name: "Ariane",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "longsword",
        damage: 2
    }
}

let enemy = {
    name: "Owen",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "knife",
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
    heroAttributes[0].innerText = "Name: " + hero.name;
    heroAttributes[1].innerText = "Health: " + hero.health;
    heroAttributes[2].innerText = "Weapon: " + hero.weapon.type;
    heroAttributes[3].innerText = "Damage: " + hero.weapon.damage;
}

displayStats();

//Create a form that allow users to change the name of the hero

function updateHeroDetails() {
    let newHeroName = document.getElementById("hero-name").value;
    hero.name = newHeroName;
    displayStats();
}


function displayEnemyStats() {
    let enemyAttributes = document.getElementById("enemy-attributes").children;
    enemyAttributes[0].innerText = "Name: " + enemy.name;
    enemyAttributes[1].innerText = "Health: " + enemy.health;
    enemyAttributes[2].innerText = "Weapon: " + enemy.weapon.type;
    enemyAttributes[3].innerText = "Damage: " + enemy.weapon.damage;
}

displayEnemyStats();

let startButton = document.getElementById("play");
startButton.addEventListener("click", strike);

function strike() {

    var daggerImg = document.getElementById("dagger");
    daggerImg.className = "animated bounceInLeft";
    enemy.weapon.damage++;
    displayEnemyStats();

    if(enemy.weapon.damage > 5) {
        window.alert("Game over");
    }
}

let daggerImg = document.getElementById("dagger");

daggerImg.addEventListener("click", deleteDagger);

function deleteDagger(event) {
    let selectedWeapon = event.target;
    selectedWeapon.className = "hide";
}


let enemyImg = document.getElementById("enemy");

enemyImg.addEventListener("click", deleteEnemy);

function deleteEnemy(event) {
    let selectedWeapon = event.target;
    selectedWeapon.className = "hide";
}