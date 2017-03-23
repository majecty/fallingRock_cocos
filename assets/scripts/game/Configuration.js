cc.Class({
    extends: cc.Component,

    properties: {
        fallingSpeed: {
            default: 100,
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
        window.configuration = this;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
