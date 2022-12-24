import 'phaser';
import BootLoader from './scenes/BootLoader';
import PreLoader from './scenes/PreLoader';
import StartScreen from './scenes/StartScreen';
import GameUtil from './scenes/GameUtil';

window.addEventListener("load", function() {
    (function() {
        //encap game;
        let game;
        var config = {
            type: Phaser.CANVAS,
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            scale: {
                mode: Phaser.Scale.ENVELOP,
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
            },
        };

        game = new Phaser.Game(config);
        game.scene.add("BootLoader", BootLoader, true);
        game.scene.add("PreLoader", PreLoader);
        game.scene.add("StartScreen", StartScreen);

        window.focus();
        resize();
        window.addEventListener("resize", resize, false);

        function resize() {
            let canvas = document.querySelector("canvas");
            let windowWidth = document.documentElement.clientWidth;
            let windowHeight = document.documentElement.clientHeight;
            GameUtil.setDataKeyValue('DEADCENTER_H', windowWidth / 2);
            GameUtil.setDataKeyValue('DEADCENTER_V', windowHeight / 2);

            let windowRatio = windowWidth / windowHeight;
            let gameRatio = game.config.width / game.config.height;
            if (windowRatio < gameRatio) {
                canvas.style.width = windowWidth + "px";
                canvas.style.height = (windowWidth / gameRatio) + "px";
            } else {
                canvas.style.width = (windowHeight * gameRatio) + "px";
                canvas.style.height = windowHeight + "px";
            }
        }
    })();
});