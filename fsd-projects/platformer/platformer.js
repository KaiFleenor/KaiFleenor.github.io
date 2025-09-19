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
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1250, 300, 110, 15, "hotpink");
    createPlatform(600, 495, 160, 15, "cyan");
    createPlatform(400, 640, 10, 10, "black");
    createPlatform(550, 570, 20, 170, "cyan")
    createPlatform(570, 650, 30, 10, "cyan")
    createPlatform(900, 400, 250, 11, "cyan")
    createPlatform(1100, 180, 20, 20, "blue")
    createPlatform(1250, 170, 20, 130, "hotpink")
    createPlatform(1350, 160, 10, 140, "hotpink")
    createPlatform(1320, 500, 180, 15, "green")
    createPlatform(1250, 315, 20, 105, "green")
    createPlatform(880, 620, 35, 15, "green")
    createPlatform(400, 370, -80, 10, "lime")
    createPlatform(600, 280, 200, 20, "lime")
    createPlatform(750, 600, 10, 140, "cyan")
    createPlatform(740, 730, 10, 10, "cyan")
    createPlatform(400, 280, 15, 100, "lime")
    createPlatform(305, 280, 15, 100, "lime")
    createPlatform(800, 100, 100, 10, "blue")
    createPlatform(915, 411, 15, 329)
    createPlatform(1230, 500, 15, 135)
    createPlatform(930, 620, 70, 15, "green")
    createPlatform(1080, 620, -80, 15, "green")
    createPlatform(1080, 620, 150, 15, "green")
    createPlatform(970, 180, 20, 20, "blue")
    createPlatform(200, 150, 100, 20, "red")


    // TODO 3 - Create Collectables
    createCollectable("kennedi", 650, 650);
    createCollectable("diamond", 1340, 450);
    createCollectable("max", 830, 50)
    createCollectable("grace", 335, 310)
    createCollectable("steve", 930, 550, 0.5, 1)


    
    // TODO 4 - Create Cannons

    createCannon("right", 300, 1500);
    createCannon("right", 580, 1350);
    createCannon("top", 530, 2500)   
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
