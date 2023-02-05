import DigDownRoot from "./DigDownRoot.js";


    let game = new DigDownRoot();


  window.onload = function() {
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.canvas.width = 600;
    ctx.canvas.height = 600;
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height); 
     game.ctx = ctx;
     game.startGame();
  }
