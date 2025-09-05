$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
    createPlatform(1000,200,200,10);
    createPlatform(800,250,100,10)
    createPlatform(650,300,100,10)
    createPlatform(500,350,100,10);
    createPlatform(350,400,100,10);
    createPlatform(350,550,100,10);
    createPlatform(200,475,100,10);
    createPlatform(500,625,100,10);


    // TODO 3 - Create Collectables
    createCollectable("dad",230,100,0.9,0.4)
    createCollectable("playa",1080,100,0.9,0.4)
    createCollectable("troll",375,100,0.9,0.4)
    createCollectable("mustard",530,100,0.9,0.4)
    createCollectable("mango",680,100,0.9,0.4)

    // TODO 4 - Create Cannons
    createCannon("left",300,1000);
    createCannon("top",985,1000);
    createCannon("top",700,1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
