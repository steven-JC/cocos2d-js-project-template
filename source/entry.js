import 'babel-polyfill';
cc.game.onStart = function() {
    let a = { 1: 2, 2: 3 };
    const b = {...a };
    let {aa} = a;
    (async function () {
        let a = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, 1000);
        });
        cc.log(a);
        console.log(a+1);
    })();

    var HelloWorldScene = require('./scene.js');

    if(!cc.sys.isNative && document.getElementById("cocosLoading")) // If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);

    // Adjust viewport meta
    cc.view.adjustViewPort(true);

    // Uncomment the following line to set a fixed orientation for your game
    // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(1280, 720, cc.ResolutionPolicy.SHOW_ALL);

    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);

    // load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.spriteFrameCache.addSpriteFrames(res.plist1);
        cc.spriteFrameCache.addSpriteFrames(res.lizi);
        cc.director.runScene(new HelloWorldScene());
    }, this);
};

cc.game.run();