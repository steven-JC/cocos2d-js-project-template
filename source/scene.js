
var HelloWorldLayer = cc.LayerColor.extend({
    sprite: null,
    ctor: function () {
        // ////////////////////////////
        // 1. super init first
        this._super(cc.color(255, 255, 255, 255));

        var size = cc.winSize;

        // ///////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite('#logo.jpg');
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
        });

        this.sprite.setScale(.3);

        this.childSprite = new cc.Sprite(res.logo);
        this.childSprite.attr({
            x: this.sprite.width / 2 -10,
            y: this.sprite.height / 2,
        });

        this.childSprite.setScale(.5);

        this.sprite.addChild(this.childSprite, 0);

        this.addChild(this.sprite, 0);

        var rotate = cc.rotateBy(2, 360, 360);

        this.childSprite.runAction(cc.spawn(rotate, cc.sequence(cc.scaleTo(1, .1), cc.scaleTo(1, .6))).repeatForever());

        var jumpTo = cc.jumpTo(2, cc.p(300, 300), 50, 4);

        var bezier = cc.bezierTo(2, [cc.p(100, 100), cc.p(600, 450), cc.p(200, 100)]);


        this.sprite.runAction(cc.spawn(cc.rotateBy(2, 360), cc.sequence(bezier, jumpTo)).repeatForever());
        

        // var particleSystem = new cc.ParticleSystem(res.lizi);  
        // particleSystem.x = size.width / 2;  
        // particleSystem.y = size.height / 2;          
        // this.addChild(particleSystem);  

        // particleSystem.runAction(cc.spawn(cc.sequence(jumpTo)).repeatForever());







        return true;
    },
});

var HelloWorldScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    },
});

export default HelloWorldScene;