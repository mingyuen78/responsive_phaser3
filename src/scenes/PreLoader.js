export default class PreLoader extends Phaser.Scene {
    constructor() {
        super("PreLoader");
    }
    preload() {
        this.load.baseURL = 'assets/';
        this.load.audio('bgm', ['/audio/bgm.mp3', '/audio/bgm.ogg']);
        this.load.image('bg', '/sprites/bg.jpg');
        this.load.image('map', '/sprites/bgiso.png');
        this.load.image('peep', '/sprites/bunny.png');

        this.load.animation('gemAnim', '/sprites/animations/gems.json');
        this.load.atlas('gems', '/sprites/gems.png', '/sprites/gems.json');

        this.loadedProgress = 0;
        this.load.on(Phaser.Loader.Events.PROGRESS, p => {
            this.loadedProgress = p;
        });

    }
    create() {
        const loading = this.add.image(this.game.config.width / 2, this.game.config.height / 2, "loading");
        loading.setOrigin(0.5, 0.5);
        this.loading = loading;
        this.loading.scaleX = 0;
    }
    update() {
        this.loading.scaleX = this.loadedProgress;
        if (this.loading.scaleX == 1) {
            this.scene.start("StartScreen");
        }
    }
}