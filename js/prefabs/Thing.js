var PointClk = PointClk || {};

PointClk.Thing = function(state, data) {
    Phaser.Sprite.call(this, state.game, data.x, data.y, data.asset);

    this.game = state.game;
    this.state = state;
    this.anchor.setTo(0.5);
};

PointClk.Thing.prototype = Object.create(Phaser.Sprite.prototype);
PointClk.Thing.prototype.constructor = PointClk.Thing;
