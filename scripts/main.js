let gamePadsIndex;
window.addEventListener("gamepadconnected", (e) => {
    gamePadIndex = e.gamepad.index;
    gp = navigator.getGamepads()[e.gamepad.index];
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    gp.index, gp.id,
    gp.buttons.length, gp.axes.length);
    console.log(gp.buttons);
  });


function getInfo() {
    for(let i = 0; i < navigator.getGamepads().length; i++) {
        console.log(navigator.getGamepads()[i]);
    }
}