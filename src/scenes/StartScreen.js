import GameUtil from "./GameUtil";
export default class StartScreen extends Phaser.Scene {
    constructor() {
        super("StartScreen");
        this.MAPSCALE = 0.65;
    }
    create() {
        // Bg is always neutral and will cover as much ground as possible.
        const bg = this.add.image(0, 0, "bg");
        bg.setScale(1, 1);
        bg.setOrigin(0, 0);

        this.MID_X = GameUtil.getDataKeyValue('DEADCENTER_H')
        this.MID_Y = GameUtil.getDataKeyValue('DEADCENTER_V')

        const map = this.add.image(this.MID_X, this.MID_Y, "map");

        map.setScale(this.MAPSCALE);
        map.setOrigin(0.5);

        this.bunny1 = this.add.image(this.MID_X - 20, this.MID_Y, "peep");
        this.bunny1.setOrigin(0.5);
        this.bunny1.setScale(1.2);

        this.bunny2 = this.add.image(this.MID_X + 23, this.MID_Y + 130, "peep");
        this.bunny2.setOrigin(0.5);
        this.bunny2.setScale(1.2);

        this.bunny3 = this.add.image(this.MID_X - 200, this.MID_Y + 30, "peep");
        this.bunny3.setOrigin(0.5);
        this.bunny3.setScale(1.2);

        this.gem = this.add.sprite(this.MID_X + 250, this.MID_Y + 50, "gems").play("ruby");
        this.gem.setOrigin(0.5);
        this.gem.setScale(1);





    }
    update() {
        //no update tick
    }
}