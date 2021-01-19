export default class Model {
  constructor() {
    this.sound = true;
    this.music = true;
    this.bgMusic = false;
  }

  set musicOn(value) {
    this.music = value;
  }

  get musicOn() {
    return this.music;
  }

  set soundOn(value) {
    this.sound = value;
  }

  get soundOn() {
    return this.sound;
  }

  set bgMusicPlaying(value) {
    this.bgMusic = value;
  }

  get bgMusicPlaying() {
    return this.bgMusic;
  }
}