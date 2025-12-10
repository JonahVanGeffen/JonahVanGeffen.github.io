var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
      function createObstacle(x, y, damage, rotation){
      var hitZoneSize = 25; //size of collision area of obstacle
      var damageFromObstacle = damage; //amount of damage the obstacle does
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle and gives it a size and hitzone.
      obstacleHitZone.x = x; //sets the obstacles x position
      obstacleHitZone.y = y; //sets the obstacles y position
      game.addGameItem(obstacleHitZone); //adds the obstacle to the game
      var obstacleImage = draw.bitmap("img/spike.png"); //draws the saw image as a bitmap and stores it to obstacle image
      obstacleHitZone.addChild(obstacleImage); //adds the picture as a child to the hitzone
      obstacleImage.x = -25; // offsets the image horizontally relative to the hitzone
      obstacleImage.y = -25; // offsets the image vertically relative to the hitzone
      obstacleImage.scaleX = 0.05;
      obstacleImage.scaleY = 0.05;
      obstacleHitZone.rotationalVelocity = rotation;

    }
     

   function createEnemy(x,y){
      var enemy = game.createGameItem("enemy", 25);
      var enemyImage = draw.rect(50, 50, "red"); //creates image of th enemy and stores it to the enemyImage variable
        enemyImage.x = -25; //horizontal offset of hitzone
        enemyImage.y = -25; //verticle offset of hitzone
        enemy.addChild(enemyImage); //attaches image to enemy object
        enemy.x = x; //sets x position of enemy
        enemy.y = y; //sets y position of enemy
        game.addGameItem(enemy); //adds the enemy to the game


        enemy.velocityX -= 5 //sets the speed of the enemy

        // handles when Halle collides with enemy
        enemy.onPlayerCollision = function(){
        game.changeIntegrity(-15) //enemy's damage to the player's health
      }

        enemy.onProjectileCollision = function(){
        game.increaseScore(100); //increases the player's score by 100 when projectile collision
        enemy.fadeOut(); //enemy fades out when Halle's projectile collides with it
      }
    }
    

    function createReward(x,y){
      var reward = game.createGameItem("reward", 25);
      var rewardImage = draw.rect(50, 50, "blue"); //creates image of th reward and stores it to the rewardImage variable
        rewardImage.x = -25; //horizontal offset of hitzone
        rewardImage.y = -25; //verticle offset of hitzone
        reward.addChild(rewardImage); //attaches image to reward object
        reward.x = x; //sets x position of reward
        reward.y = y; //sets y position of reward
        game.addGameItem(reward); //adds the reward to the game


        reward.velocityX -= 5 //sets the speed of the reward

        // handles when Halle collides with enemy
        reward.onPlayerCollision = function(){
        game.changeIntegrity(20) //reward's gift to the player's health
        reward.fadeOut();//reward fades out when Halle's projectile collides with it
      }

    }

    

    function createLevelMarker(x,y){
      var levelMarker = game.createGameItem("level", 25);
      var levelImage = draw.rect(50, 50, "yellow"); //creates image of th reward and stores it to the rewardImage variable
        levelImage.x = -25; //horizontal offset of hitzone
        levelImage.y = -25; //verticle offset of hitzone
        levelMarker.addChild(levelImage); //attaches image to reward object
        levelMarker.x = x; //sets x position of level marker
        levelMarker.y = y; //sets y position of level marker
        game.addGameItem(levelMarker); //adds the reward to the game


        levelMarker.velocityX -= 1 //sets the speed of the reward

        // handles when Halle collides with enemy
        levelMarker.onPlayerCollision = function(){
        game.changeIntegrity(20) //level marker
      }

        levelMarker.onProjectileCollision = function(){
        game.increaseScore(100); //increases the player's score by 100 when projectile collision
        levelMarker.fadeOut(); //reward fades out when Halle's projectile collides with it
      }
    }
    
    

    function startLevel() {
      // TODO 13 goes below here
     var level = levelData[currentLevel]; //fetches the current level from the level data array and stores it inside of the level variable 
      var levelObjects = level.gameItems; //retrueves the array of gameItems and stores it in levelObjects variable

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.rotation);
        }
        if(element.type === "enemy"){
          createEnemy(element.x, element.y);
        }
        if(element.type === "reward"){
          createReward(element.x, element.y);
        }
        if(element.type === "levelMarker"){
          createLevelMarker(element.x, element.y);
        }
      }
    






      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}

