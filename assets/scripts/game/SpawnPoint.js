cc.Class({
    extends: cc.Component,

    properties: {
        rock: {
            default: null,
            type: cc.Prefab
        }
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.initialRoutine = this.schedule(function () {
            var newRock = cc.instantiate(this.rock);
            console.dir(newRock);
            console.log("instantiated " + this.node.x + ", " + this.node.y);
            newRock.parent = this.node;
            newRock.x = 0;
            newRock.y = 0;
        }, 1);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
