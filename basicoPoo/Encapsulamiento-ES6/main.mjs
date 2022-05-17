function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreta.com/" + id;
    console.log("Se está reproduciendo desde " + urlSecreta)
}
function videostop(id) {
    const urlSecreta = "https://platziultrasecreta.com/" + id;
    console.log("Pausamos la url: " + urlSecreta)
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videostop(this.videoID);
    }
}