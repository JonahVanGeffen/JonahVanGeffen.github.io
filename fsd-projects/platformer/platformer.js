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
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1000,200,200,10);
    createPlatform(800,250,100,10)
    createPlatform(650,300,100,10)
    createPlatform(500,350,100,10);


    // TODO 3 - Create Collectables
    createCollectable("diamond", 300,700);
    createCollectable("diamond", 350,700);
    createCollectable("diamond", 400,700);
    createCollectable("diamond", 450,700);
    createCollectable("diamond", 500,700);
    createCollectable("diamond", 550,700);
    createCollectable("diamond", 600,700);
    createCollectable("diamond", 650,700);
    createCollectable("diamond", 700,700);
    createCollectable("diamond", 750,700);
    createCollectable("diamond", 800,700);
    createCollectable("diamond", 850,700);
    createCollectable("diamond", 900,700);
    createCollectable("diamond", 950,700);
    createCollectable("diamond", 1000,700);
    createCollectable("diamond", 1050,700);
    createCollectable("diamond", 1100,700);
    createCollectable("diamond", 1150,700);
    createCollectable("diamond", 1200,700);
    createCollectable("diamond", 1250,700);
    createCollectable("diamond", 1300,700);
    createCollectable("diamond", 1350,700);
    createCollectable("diamond", 300,650);
    createCollectable("diamond", 350,650);
    createCollectable("diamond", 400,650);
    createCollectable("diamond", 450,650);
    createCollectable("diamond", 500,650);
    createCollectable("diamond", 550,650);
    createCollectable("diamond", 600,650);
    createCollectable("diamond", 650,650);
    createCollectable("diamond", 700,650);
    createCollectable("diamond", 750,650);
    createCollectable("diamond", 800,650);
    createCollectable("diamond", 850,650);
    createCollectable("diamond", 900,650);
    createCollectable("diamond", 950,650);
    createCollectable("diamond", 1000,650);
    createCollectable("diamond", 1050,650);
    createCollectable("diamond", 1100,650);
    createCollectable("diamond", 1150,650);
    createCollectable("diamond", 1200,650);
    createCollectable("diamond", 1250,650);
    createCollectable("diamond", 1300,650);
    createCollectable("diamond", 1350,650);
    createCollectable("diamond", 300,600);
    createCollectable("diamond", 350,600);
    createCollectable("diamond", 400,600);
    createCollectable("diamond", 450,600);
    createCollectable("diamond", 500,600);
    createCollectable("diamond", 550,600);
    createCollectable("diamond", 600,600);
    createCollectable("diamond", 650,600);
    createCollectable("diamond", 700,600);
    createCollectable("diamond", 750,600);
    createCollectable("diamond", 800,600);
    createCollectable("diamond", 850,600);
    createCollectable("diamond", 900,600);
    createCollectable("diamond", 950,600);
    createCollectable("diamond", 1000,600);
    createCollectable("diamond", 1050,600);
    createCollectable("diamond", 1100,600);
    createCollectable("diamond", 1150,600);
    createCollectable("diamond", 1200,600);
    createCollectable("diamond", 1250,600);
    createCollectable("diamond", 1300,600);
    createCollectable("diamond", 1350,600);
    createCollectable("diamond", 300,550);
    createCollectable("diamond", 350,550);
    createCollectable("diamond", 400,550);
    createCollectable("diamond", 450,550);
    createCollectable("diamond", 500,550);
    createCollectable("diamond", 550,550);
    createCollectable("diamond", 600,550);
    createCollectable("diamond", 650,550);
    createCollectable("diamond", 700,550);
    createCollectable("diamond", 750,550);
    createCollectable("diamond", 800,550);
    createCollectable("diamond", 850,550);
    createCollectable("diamond", 900,550);
    createCollectable("diamond", 950,550);
    createCollectable("diamond", 1000,550);
    createCollectable("diamond", 1050,550);
    createCollectable("diamond", 1100,550);
    createCollectable("diamond", 1150,550);
    createCollectable("diamond", 1200,550);
    createCollectable("diamond", 1250,550);
    createCollectable("diamond", 1300,550);
    createCollectable("diamond", 1350,550);
    createCollectable("diamond", 300,500);
    createCollectable("diamond", 350,500);
    createCollectable("diamond", 400,500);
    createCollectable("diamond", 450,500);
    createCollectable("diamond", 500,500);
    createCollectable("diamond", 550,500);
    createCollectable("diamond", 600,500);
    createCollectable("diamond", 650,500);
    createCollectable("diamond", 700,500);
    createCollectable("diamond", 750,500);
    createCollectable("diamond", 800,500);
    createCollectable("diamond", 850,500);
    createCollectable("diamond", 900,500);
    createCollectable("diamond", 950,500);
    createCollectable("diamond", 1000,500);
    createCollectable("diamond", 1050,500);
    createCollectable("diamond", 1100,500);
    createCollectable("diamond", 1150,500);
    createCollectable("diamond", 1200,500);
    createCollectable("diamond", 1250,500);
    createCollectable("diamond", 1300,500);
    createCollectable("diamond", 1350,500);
    // TODO 4 - Create Cannons
    createCannon();

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
