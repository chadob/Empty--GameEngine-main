const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./17153.gif");
ASSET_MANAGER.queueDownload("./falconkick.png");
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	gameEngine.addEntity(new Captain(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
