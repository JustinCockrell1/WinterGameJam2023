import DigDownRoot from "./DigDownRoot.js";


    let game;

    function resetGame() {
      

    }

    function startGame() {
        game = new DigDownRoot();
        const canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerHeight-20;
        ctx.canvas.height = window.innerHeight-20;
        ctx.fillStyle = "grey";
        ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height); 
         game.ctx = ctx;
         game.startGame();
    }

  window.onload = function() {
    startGame();
  }
