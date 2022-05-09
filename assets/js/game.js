var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        
        // ask player if they want to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if skip, confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
        
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave the fight
            if (confirmSkip){
                window.alert(playerName + " has chosen to skip this fight. Goodbye! ");
                
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
    

        // remove enemys health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        // check enemys health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died! ");

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave loop if enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }


        // remove players health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
        );

        // check players health
        if (playerHealth <= 0){
            window.alert(playerName + " has died! ");

            // leave loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left. ")
        }
    } 
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {

        // let player know what round they're in
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

        // pick new enemy to fight
        var pickedEnemyName = enemyNames[i];

        // set enemyHealth before starting new fight
        enemyHealth = 50;

        fight(pickedEnemyName)
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
