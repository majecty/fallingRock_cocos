cc.Class {
    extends: cc.Component

    properties: {
        # foo:
        #   default: null
        #   type: cc
        #   serializable: true # [optional], default is true
        #   visible: true      # [optional], default is true
        #   displayName: 'Foo' # [optional], default is property name
        #   readonly: false    # [optional], default is false
    }

    myOnButtonTapHandler: () ->
        cc.log("Button tap")
        cc.director.loadScene("game")

    update: (dt) ->
        # do your update here
}
