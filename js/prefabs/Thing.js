var PointClk = PointClk || {};

PointClk.Thing = function(state, data) {
    Phaser.Sprite.call(this, state.game, data.x, data.y, data.asset);

    this.game = state.game;
    this.state = state;
    this.data = data;
    this.anchor.setTo(0.5);

    //listen for input
    this.inputEnabled = true;
    this.input.pixelPerfectClick = true;
    this.events.onInputDown.add(this.touch, this);
};

PointClk.Thing.prototype = Object.create(Phaser.Sprite.prototype);
PointClk.Thing.prototype.constructor = PointClk.Thing;

PointClk.Thing.prototype.touch = function () {
    this.state.panelLabel.text = this.data.text;

    //if it is a collectable, then collect it
    if(this.data.type == 'collectable') {
        this.state.addItem(this.data);
        this.kill();
        return;
    }

    //are we selecting anything?
    var selectedItem = this.state.selectedItem;

    if(selectedItem) {
        //are there interactions? are they with the selected item?
        if(this.data.interactions && this.data.interactions[this.state.selectedItem.data.id]) {

            //we do have an interaction between the thing and the selected item
            var interaction = this.data.interactions[this.state.selectedItem.data.id];

            //show text
            if(interaction.text) {
                this.state.panelLabel.text = interaction.text;
            }

            if(interaction.asset) {
                this.loadTexture(interaction.asset);
                this.data.asset = interaction.asset;
            }
        }
    }
};
