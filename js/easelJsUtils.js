(function(){
	
	var Graphics = createjs.Graphics;
	var Shape = createjs.Shape;
	var SpriteSheet = createjs.SpriteSheet;
	var Sprite = createjs.Sprite;
	
	/**
	 * Constructeur
	 */
	EaselJsUtils = function(stage) {
		this.stage = stage;
	};
	
	/**
	 * Classe EaselJsUtils
	 */
	EaselJsUtils.prototype = {
			
			/**
			 * Créer et afficher un média
			 * @param String src : source du média
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - Array scale : échelle
			 * @returns {Bitmap}
			 */
			createBitmap: function(src, x, y, options) {
				// Définir la source et la position du média
				var bitmap = new createjs.Bitmap(src);
				bitmap.x = x;
				bitmap.y = y;
				// Appliquer les options
				if (options) {
					// Mise à l'échelle
					if (options.scale) {
						bitmap.scaleX = options.scale[0];
						bitmap.scaleY = options.scale[1];
					}
				}
				// Ajouter le Bitmap au Stage et le retourner
				this.stage.addChild(bitmap);
				return bitmap;
			},
			
			/**
			 * Créer une image "Bloc d'herbe"
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - Array scale : échelle
			 * @returns {Bitmap}
			 */
			createGrassBlock: function(x, y, options) {
				return this.createBitmap("img/GrassBlock.png", x, y, options);
			},
			
			/**
			 * Créer une image "Arbre - petit"
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - Array scale : échelle
			 * @returns {Bitmap}
			 */
			createShortTree: function(x, y, options) {
				return this.createBitmap("img/ShortTree.png", x, y, options);
			},
			
			/**
			 * Créer une image "Arbre - grand"
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - Array scale : échelle
			 * @returns {Bitmap}
			 */
			createTallTree: function(x, y, options) {
				return this.createBitmap("img/TallTree.png", x, y, options);
			},
			
			/**
			 * Créer une image "Rocher"
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - Array scale : échelle
			 * @returns {Bitmap}
			 */
			createRock: function(x, y, options) {
				return this.createBitmap("img/Rock.png", x, y, options);
			},
			
			/**
			 * Créer une image "Cochon"
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - Array scale : échelle
			 * @returns {Bitmap}
			 */
			createPig: function(x, y, options) {
				return this.createBitmap("img/pig.png", x, y, options);
			},
			
			/**
			 * Créer une image "Nuage"
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - Array scale : échelle
			 * @returns {Bitmap}
			 */
			createCloud: function(x, y, options) {
				return this.createBitmap("img/cloud.png", x, y, options);
			},
			
			/**
			 * Afficher du texte
			 * @param String text : le texte à afficher
			 * @param String font : police d'écriture et style
			 * @param Number x : position x
			 * @param Number y : position y
			 * @param Object options : options
			 * - String color : couleur du texte
			 * - String textAlign : alignement du texte
			 * - String cursor : type de pointeur souris
			 * @returns {Text}
			 */
			createText: function(text, font, x, y, options) {
				// Définir le texte, la police et la position
				var txt = new createjs.Text();
				txt.font = font;
				txt.text = text;
				txt.x = x;
				txt.y = y;
				// Appliquer les options
				if (options) {
					if (options.color) {
						txt.color = options.color;
					}
					if (options.textAlign) {
						txt.textAlign = options.textAlign;
					}
					if (options.cursor) {
						txt.cursor = options.cursor;
					}
				}
				// Ajouter le Text au Stage et le retourner
				this.stage.addChild(txt);
				return txt;
			},
			
			/**
			 * Dessiner un rectangle avec coins arrondis
			 * @param Number x : position x de la forme
			 * @param Number y : position y de la forme
			 * @param Number w : largeur de la forme
			 * @param Number h : hauteur de la forme
			 * @param Array rgb : couleur de la forme
			 * @param Object options : options
			 * - Number opactiy : opacité de la forme
			 * - Number radius : rayon des angles de la forme
			 * @returns {Shape}
			 */
			createRoundRect: function(x, y, w, h, rgb, options) {
				// Créer la forme
				var graphic = new Graphics();
				var opacity = 1;
				var radius = 90;
				if (options) {
					if (options.opacity) {
						opacity = options.opacity;
					}
					if (options.radius) {
						radius = options.radius;
					}
				}
				graphic.beginFill(Graphics.getRGB(rgb[0], rgb[1], rgb[2], opacity));
				graphic.drawRoundRect(x,  y,  w,  h,  radius);
				// Ajouter la forme au stage
				var shape = new Shape(graphic);
				this.stage.addChild(shape);
				return shape;
			},
			
			/**
			 * Dessiner un cerle
			 * @param Number x : position x de la forme
			 * @param Number y : position y de la forme
			 * @param Number radius : rayon du cercle
			 * @param Array rgb : couleur de la forme
			 * @param Object options : options
			 * - Number opacity : opacité de la forme
			 * @returns {Shape}
			 */
			createCircle: function(x, y, radius, rgb, options) {
				// Créer la forme
				var graphic = new Graphics();
				var opacity = 1;
				if (options) {
					if (options.opacity) {
						opacity = options.opacity;
					}
				}
				graphic.beginFill(Graphics.getRGB(rgb[0], rgb[1], rgb[2], opacity));
				graphic.drawCircle(x, y, radius);
				// Ajouter la forme au stage
				var shape = new Shape(graphic);
				this.stage.addChild(shape);
				return shape;
			},
			
			/**
			 * Dessiner le Player
			 * @param Number x : position x du joueur
			 * @param Number y : position y du joueur
			 * @return {Sprite}
			 */
			createPlayer: function(x, y) {
				// Préparer les données de la Spritesheet
				var data = {
						// image | spritesheet
						images: ["sprites/player.png"],
						// définition des frames
						frames: [
						    // x, y, width, height, imageIndex, regX, regY
							[365, 98, 69, 71, 0, 69/2, 71], // duck
							[0, 196, 66, 92, 0, 66/2, 92], // front
							[438, 0, 69, 92, 0, 69/2, 92], // hurt
							[438, 93, 67, 89, 0, 67/2, 89], // jump
							[67, 196, 66, 92, 0, 69/2, 92], // stand
							[0, 0, 72, 92, 0, 69/2, 92], // walk1
							[73, 0, 72, 92, 0, 69/2, 92], // walk2
							[146, 0, 72, 91, 0, 69/2, 91], // walk3
							[0, 98, 72, 92, 0, 69/2, 92], // walk4
							[73, 98, 72, 93, 0, 69/2, 93], // walk5
							[146, 98, 72, 95, 0, 69/2, 95], // walk6
							[219, 0, 72, 96, 0, 69/2, 96], // walk7
							[292, 0, 72, 97, 0, 69/2, 97], // walk8
							[219, 98, 72, 97, 0, 69/2, 97], // walk9
							[365, 0, 72, 96, 0, 69/2, 96], // walk10
							[292, 98, 72, 95, 0, 69/2, 95], // walk11
						],
						// définition des animations
						animations: {
							// start, end, next
							duck: [0,0,"walk"],
							front: [1,1,"walk"],
							hurt: [2,2,"walk"],
							jump: [3,3,"jump"],
							stand: [4,4,"stand"],
							walk: [5,15,"walk"]
						}
				};
				// Instancier la SpriteSheet
				var spriteSheet = new SpriteSheet(data);
				
				// Instancier le Sprite
				var sprite = new Sprite(spriteSheet, 'stand');
				// Positionner l'image dans le canvas
				sprite.x = x;
				sprite.y = y;
				// Ajouter le Sprite au Stage
				this.stage.addChild(sprite);
				// Retourner le Sprite
				return sprite;
			}
			
	};
	
}());