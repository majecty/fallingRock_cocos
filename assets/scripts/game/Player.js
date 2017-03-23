cc.Class({
    extends: cc.Component,

    properties: {
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
        let listener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD
        });
        listener.onKeyPressed = function (keyCode, event) {
            cc.log('pressed key: ' + keyCode);
        };
        listener.onKeyReleased = function (keyCode, event) {
            cc.log("released key: " + keyCode);
        };
        cc.eventManager.addListener(listener, this.node);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
    },
});
