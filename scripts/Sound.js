export default class Sound {
    constructor(path){
        this.sound = new Audio();
        this.sound.src = path;
    }
    playSound(){
        this.sound.play();
    }
    stopSound(){
        this.sound.pause();
    }
}