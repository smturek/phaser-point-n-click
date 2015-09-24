var PointClk = PointClk || {};

PointClk.GameState = {

    init: function(playerData) {
        this.playerData = playerData ? playerData : {};
        this.playerData.room = this.playerData.room ? this.playerData.room : 'livingroom';
    },
    create: function() {
        //panel area
        this.panel = this.add.sprite(0, 270, 'panel');

        this.loadRoom();
    },
    loadRoom: function() {
        this.roomData = JSON.parse(this.game.cache.getText(this.playerData.room));

        this.background = this.add.sprite(0, 0, this.roomData.background);

        //create things
        this.things = this.add.group();

        var thing;

        this.roomData.things.forEach(function(thingData) {
            thing = new PointClk.Thing(this, thingData);
            this.things.add(thing);
        }, this);
    }
};
