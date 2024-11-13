/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _asteroids = __webpack_require__(1);
	
	var _asteroids2 = _interopRequireDefault(_asteroids);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main to start all up.
	 */
	window.addEventListener("load", function () {
	  "use strict";
	
	  var asteroids = (0, _asteroids2.default)();
	
	  asteroids.init("canvas1");
	  asteroids.gameLoop();
	}, false); /**
	            * Main program, to start all up.
	            */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    "use strict";
	
	    // Hold grapic context
	
	    var ctx;
	
	    // Remember the time since last update & render
	    var lastGameTick;
	
	    // Hold the ship
	    var ship;
	
	    // Hold the bullets
	    var bullet;
	
	    // Object for keypress
	    var key;
	
	    // Game area
	    var width;
	    var height;
	
	    // Hud
	    var hud = void 0;
	
	    /**
	     * Set the size of the canvas.
	     */
	    function init(canvasId) {
	        // Set canvas drawing context
	        var canvas = document.getElementById(canvasId);
	        ctx = canvas.getContext("2d");
	
	        // Resize canvas and make it listen to window resize events
	        var canvasUtils = (0, _canvas2.default)();
	        canvasUtils.fullWindow("canvas1");
	        canvasUtils.resizeOnWindowResize("canvas1");
	
	        // TODO Need to support resize
	        width = canvas.width;
	        height = canvas.height;
	
	        // Default draw style
	        //ctx.lineWidth = 1;
	        //ctx.strokeStyle = "hsla(0,0%, 100%, 1)";
	
	        // Add the ship and place it in the middle
	        ship = new _ship2.default();
	        ship.moveTo(new _vector2.default(canvas.width / 2, canvas.height / 2));
	
	        // Add Bullets
	        bullet = new _bullet2.default();
	
	        // Key pressed
	        key = (0, _keyEvents2.default)();
	
	        // Hud
	        hud = (0, _hud2.default)();
	        hud.init();
	    }
	
	    /**
	     *
	     */
	    function update(td) {
	        ship.update(key, td, width, height);
	        bullet.update(key, td, ship.getPosition());
	    }
	
	    /**
	     *
	     */
	    function render() {
	        ctx.clearRect(0, 0, width, height);
	        ship.draw(ctx, key);
	        bullet.draw(ctx);
	    }
	
	    /**
	     *
	     */
	    function gameLoop() {
	        // Timediff since last frame / gametick
	        var now = Date.now();
	        var td = (now - (lastGameTick || now)) / 1000;
	        lastGameTick = now;
	
	        window.requestAnimFrame(gameLoop);
	        update(td);
	        render();
	    }
	
	    /**
	     *
	     */
	    return {
	        "init": init,
	        "gameLoop": gameLoop
	    };
	};
	
	__webpack_require__(2);
	
	var _canvas = __webpack_require__(3);
	
	var _canvas2 = _interopRequireDefault(_canvas);
	
	var _vector = __webpack_require__(4);
	
	var _vector2 = _interopRequireDefault(_vector);
	
	var _keyEvents = __webpack_require__(5);
	
	var _keyEvents2 = _interopRequireDefault(_keyEvents);
	
	var _ship = __webpack_require__(6);
	
	var _ship2 = _interopRequireDefault(_ship);
	
	var _bullet = __webpack_require__(8);
	
	var _bullet2 = _interopRequireDefault(_bullet);
	
	var _hud = __webpack_require__(9);
	
	var _hud2 = _interopRequireDefault(_hud);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Shim layer, polyfill, for requestAnimationFrame with setTimeout fallback.
	 */
	
	/**
	 * requestAnimFrame
	 */
	window.requestAnimFrame = function () {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };
	}();
	
	/**
	 * cancelRequestAnimFrame
	 */
	window.cancelRequestAnimFrame = function () {
	    return window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout;
	}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    "use strict";
	
	    /**
	     * Set the size of the canvas.
	     */
	
	    function fullWindow(canvasId) {
	        var canvas = document.getElementById(canvasId);
	        var ctx = canvas.getContext("2d");
	
	        ctx.canvas.width = Math.floor(window.innerWidth) - 1;
	        ctx.canvas.height = Math.floor(window.innerHeight) - 1;
	    }
	
	    /**
	     * Resize on window resize.
	     */
	    function resizeOnWindowResize(canvasId) {
	        window.addEventListener("resize", function () {
	            fullWindow(canvasId);
	        });
	    }
	
	    // Return whats actually exported
	    return {
	        fullWindow: fullWindow,
	        resizeOnWindowResize: resizeOnWindowResize
	    };
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Vector math
	 */
	var Vector = function () {
	    function Vector(x, y) {
	        _classCallCheck(this, Vector);
	
	        this.x = x || 0;
	        this.y = y || 0;
	    }
	
	    // Multiply with scalar
	
	
	    _createClass(Vector, [{
	        key: "muls",
	        value: function muls(scalar) {
	            return new Vector(this.x * scalar, this.y * scalar);
	        }
	
	        // Multiply itself with scalar
	
	    }, {
	        key: "imuls",
	        value: function imuls(scalar) {
	            this.x *= scalar;
	            this.y *= scalar;
	            return this;
	        }
	
	        // Multiply with scalar
	
	    }, {
	        key: "adds",
	        value: function adds(scalar) {
	            return new Vector(this.x + scalar, this.y + scalar);
	        }
	
	        // Add itself with Vector
	
	    }, {
	        key: "iadd",
	        value: function iadd(vector) {
	            this.x += vector.x;
	            this.y += vector.y;
	            return this;
	        }
	
	        // Return a clone
	
	    }, {
	        key: "clone",
	        value: function clone() {
	            return new Vector(this.x, this.y);
	        }
	    }]);
	
	    return Vector;
	}();
	
	exports.default = Vector;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    "use strict";
	
	    var pressed = {};
	
	    // On key release
	    window.addEventListener('keyup', function (event) {
	        delete pressed[event.keyCode];
	    });
	
	    // On key press
	    window.addEventListener('keydown', function (event) {
	        pressed[event.keyCode] = true;
	    });
	
	    // Return what to export
	    return {
	        LEFT: 37,
	        UP: 38,
	        RIGHT: 39,
	        DOWN: 40,
	        SPACE: 32,
	        A: 65,
	        S: 83,
	        D: 68,
	        W: 87,
	
	        isDown: function isDown(key1, key2) {
	            return pressed[key1] || pressed[key2];
	        }
	    };
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The ship.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _vector = __webpack_require__(4);
	
	var _vector2 = _interopRequireDefault(_vector);
	
	var _force = __webpack_require__(7);
	
	var _force2 = _interopRequireDefault(_force);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ship = function () {
	    function Ship() {
	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        _classCallCheck(this, Ship);
	
	        var force = new _force2.default();
	
	        this.height = options.height || 20;
	        this.width = options.width || 10;
	        this.position = options.position || new _vector2.default();
	        this.velocity = options.velocity || new _vector2.default();
	        this.speed = options.speed || new _vector2.default();
	        this.direction = options.direction || 0;
	
	        this.accelerateForce = options.accelerateForce || force.createAcceleration(new _vector2.default(80, 80));
	        this.breakForce = options.breakForce || force.createDamping(0.97);
	        this.dampForce = options.dampForce || force.createDamping(0.999);
	    }
	
	    _createClass(Ship, [{
	        key: "draw",
	        value: function draw(ctx, key) {
	            var x = this.width / 2;
	            var y = this.height / 2;
	
	            ctx.lineWidth = 1;
	            ctx.strokeStyle = 'hsla(0,0%,100%,1)';
	
	            ctx.save();
	            ctx.translate(this.position.x, this.position.y);
	            ctx.rotate(this.direction + Math.PI / 2);
	            ctx.beginPath();
	            ctx.moveTo(0, -y);
	            ctx.lineTo(x, y);
	            ctx.lineTo(0, 0.8 * y);
	            ctx.lineTo(-x, y);
	            ctx.lineTo(0, -y);
	
	            if (key.isDown(key.UP, key.W)) {
	                ctx.moveTo(0, y);
	                ctx.lineTo(-2, y + 10);
	                ctx.lineTo(0, y + 8);
	                ctx.lineTo(2, y + 10);
	                ctx.lineTo(0, y);
	            }
	
	            if (key.isDown(key.DOWN, key.S)) {
	                ctx.moveTo(y + 4, 0);
	                ctx.arc(0, 0, y + 4, 0, Math.PI, true);
	            }
	
	            ctx.stroke();
	            ctx.restore();
	        }
	    }, {
	        key: "moveTo",
	        value: function moveTo(position) {
	            this.position = position;
	            this.position.x += this.width / 2;
	            this.position.y += this.height / 2;
	        }
	    }, {
	        key: "moveForward",
	        value: function moveForward(td) {
	            this.dampForce(this.speed, td);
	            this.position.x += this.speed.x * Math.cos(this.direction) * td;
	            this.position.y += this.speed.y * Math.sin(this.direction) * td;
	            this.position.iadd(this.velocity.muls(td));
	        }
	    }, {
	        key: "throttle",
	        value: function throttle(td) {
	            this.accelerateForce(this.speed, td);
	        }
	    }, {
	        key: "rotateLeft",
	        value: function rotateLeft() {
	            this.direction -= Math.PI / 30;
	        }
	    }, {
	        key: "rotateRight",
	        value: function rotateRight() {
	            this.direction += Math.PI / 30;
	        }
	    }, {
	        key: "breaks",
	        value: function breaks(td) {
	            this.breakForce(this.speed, td);
	            this.breakForce(this.velocity, td);
	        }
	    }, {
	        key: "update",
	        value: function update(key, td, width, height) {
	            if (key.isDown(key.UP, key.W)) {
	                this.throttle(td);
	            }
	
	            if (key.isDown(key.LEFT, key.A)) {
	                this.rotateLeft();
	            }
	
	            if (key.isDown(key.DOWN, key.S)) {
	                this.breaks(td);
	            }
	
	            if (key.isDown(key.RIGHT, key.D)) {
	                this.rotateRight();
	            }
	
	            //Forces.update(this.velocity, td);
	            this.moveForward(td);
	            this.stayInArea(width, height);
	        }
	    }, {
	        key: "stayInArea",
	        value: function stayInArea(width, height) {
	            if (this.position.y < -this.height) {
	                this.position.y = height;
	            }
	
	            if (this.position.y > height) {
	                this.position.y = -this.height;
	            }
	
	            if (this.position.x > width) {
	                this.position.x = -this.width;
	            }
	
	            if (this.position.x < -this.width) {
	                this.position.x = width;
	            }
	        }
	    }, {
	        key: "getPosition",
	        value: function getPosition() {
	            return this.position;
	        }
	    }]);
	
	    return Ship;
	}();
	
	exports.default = Ship;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The force around us.
	 */
	var Force = function () {
	    function Force() {
	        _classCallCheck(this, Force);
	
	        this.all = {};
	    }
	
	    _createClass(Force, [{
	        key: "createAcceleration",
	        value: function createAcceleration(vector) {
	            return function (velocity, td) {
	                velocity.iadd(vector.muls(td));
	            };
	        }
	    }, {
	        key: "createDamping",
	        value: function createDamping(damping) {
	            return function (velocity /*, td */) {
	                velocity.imuls(damping);
	            };
	        }
	    }, {
	        key: "createWind",
	        value: function createWind(vector) {
	            return function (velocity, td) {
	                velocity.iadd(vector.adds(td));
	            };
	        }
	    }, {
	        key: "addAcceleration",
	        value: function addAcceleration(name, vector) {
	            this.all[name] = this.createAcceleration(vector);
	        }
	    }, {
	        key: "addDamping",
	        value: function addDamping(name, damping) {
	            this.all[name] = this.createDamping(damping);
	        }
	    }, {
	        key: "addWind",
	        value: function addWind(name, vector) {
	            this.all[name] = this.createWind(vector);
	        }
	    }, {
	        key: "update",
	        value: function update(object, td) {
	            for (var force in this.all) {
	                if (this.all.hasOwnProperty(force)) {
	                    this.all[force](object, td);
	                }
	            }
	        }
	    }]);
	
	    return Force;
	}();
	
	exports.default = Force;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Bullets.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _vector = __webpack_require__(4);
	
	var _vector2 = _interopRequireDefault(_vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Bullet = function () {
	    function Bullet() {
	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        _classCallCheck(this, Bullet);
	
	        ///
	
	        this.height = options.height || 20;
	        this.width = options.width || 10;
	        this.position = options.position || new _vector2.default();
	        this.velocity = options.velocity || new _vector2.default();
	        this.speed = options.speed || new _vector2.default();
	        this.direction = options.direction || 0;
	        this.bullets = [];
	        this.ticksSinceLastAdd = 0;
	    }
	
	    _createClass(Bullet, [{
	        key: "draw",
	        value: function draw(ctx, key) {
	
	            ctx.save();
	
	            // ctx.lineWidth = 5;
	            // ctx.strokeStyle = 'hsla(0,0%,100%,1)';
	
	            // ctx.fillStyle = "rgb(200,0,0)";
	            // ctx.fillRect (10, 10, 50, 50);
	
	            // ctx.moveTo(100, 100);
	            // ctx.lineTo(200, 200);
	            //console.log(this.bullets.length);
	
	            for (var i = 0, len = this.bullets.length; i < len; i++) {
	                //
	                // ctx.translate(this.bullets[i].x, this.bullets[i].y);
	                // ctx.beginPath();
	                // ctx.moveTo(this.bullets[i].x, this.bullets[i].y);
	                // ctx.lineTo(this.bullets[i].x + 10, this.bullets[i].y + 10);
	
	                //ctx.moveTo(0, 0);
	                //ctx.lineTo(10, 10);
	
	                //        ctx.stroke();
	                /*
	                ctx.fillRect (
	                    this.bullets[i].x,
	                    this.bullets[i].y,
	                    this.bullets[i].x + 10,
	                    this.bullets[i].y + 10
	                );*/
	                /*
	                            ctx.translate(this.bullets[i].x + 40, this.bullets[i].y + 40);
	                            ctx.beginPath();
	                            ctx.lineTo(10, 10);
	                            ctx.stroke();
	                            */
	
	                ctx.fillStyle = "rgb(255, 255, 255)";
	                ctx.fillRect(this.bullets[i].x, this.bullets[i].y, 4, 4);
	            }
	
	            ctx.stroke();
	            ctx.restore();
	        }
	    }, {
	        key: "add",
	        value: function add(position) {
	            console.log(this.bullets.length);
	
	            if (this.bullets.length < 10) {
	                this.bullets.push(position.clone());
	                this.ticksSinceLastAdd = 10;
	            }
	        }
	    }, {
	        key: "move",
	        value: function move(td) {
	            for (var i = 0, len = this.bullets.length; i < len; i++) {
	                this.bullets[i].x += 1;
	                this.bullets[i].y += 1;
	            }
	            /*
	            this.dampForce(this.speed, td);
	            this.position.x += this.speed.x * Math.cos(this.direction) * td;
	            this.position.y += this.speed.y * Math.sin(this.direction) * td;
	            this.position.iadd(this.velocity.muls(td));
	            */
	        }
	    }, {
	        key: "update",
	        value: function update(key, td, position) {
	            // Delay shot when recently did shoot
	            if (this.ticksSinceLastAdd > 0) {
	                this.ticksSinceLastAdd--;
	            }
	
	            if (key.isDown(key.SPACE) && this.ticksSinceLastAdd === 0) {
	                this.add(position);
	            }
	
	            //Forces.update(this.velocity, td);
	            this.move(td);
	            //this.stayInArea(width, height);
	        }
	    }, {
	        key: "stayInArea",
	        value: function stayInArea(width, height) {
	            if (this.position.y < -this.height) {
	                this.position.y = height;
	            }
	
	            if (this.position.y > height) {
	                this.position.y = -this.height;
	            }
	
	            if (this.position.x > width) {
	                this.position.x = -this.width;
	            }
	
	            if (this.position.x < -this.width) {
	                this.position.x = width;
	            }
	        }
	    }]);
	
	    return Bullet;
	}();
	
	exports.default = Bullet;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function () {
	    "use strict";
	
	    var fullscreenElement;
	
	    /**
	     * Initiate the Hud.
	     */
	    function init(hudId) {
	        var body = document.getElementById("body1");
	        var fullscreenElement = document.getElementById("fullscreen");
	
	        console.log("Init hud");
	        fullscreenElement.addEventListener("click", function () {
	            console.log("Request fullscreen");
	            body.webkitRequestFullscreen();
	        });
	    }
	
	    /**
	     * Return whats actually exported
	     */
	    return {
	        "init": init
	    };
	};
	
	var _fullscreen = __webpack_require__(10);
	
	var _fullscreen2 = _interopRequireDefault(_fullscreen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  "use strict";
	
	  var canvas = (0, _canvas2.default)();
	
	  /**
	   * Activate the fullscreen of the element.
	   */
	  function activate(elementId) {
	    var canvas = document.getElementById();
	    var ctx = canvas.getContext("2d");
	
	    ctx.canvas.width = Math.floor(window.innerWidth) - 1;
	    ctx.canvas.height = Math.floor(window.innerHeight) - 1;
	  }
	
	  /**
	   * Eventhandler when fullscreen event succeeded.
	   */
	  document.setEventHandler("fullscreenchange", function () {
	    console.log("event fullscreen change");
	    canvas.fullWindow();
	  });
	
	  /**
	   * Eventhandler when fullscreen event failed.
	   */
	  document.setEventHandler("fullscreenerror", function () {
	    console.log("event fullscreen error");
	  });
	
	  /**
	   * Return whats actually exported
	   */
	  return {
	    activate: activate
	  };
	};
	
	var _canvas = __webpack_require__(3);
	
	var _canvas2 = _interopRequireDefault(_canvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGI3MTg3Nzk0N2VkZGVlOTliMjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FzdGVyb2lkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvcmVxdWVzdC1hbmltLWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMva2V5LWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZm9yY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaHVkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9mdWxsc2NyZWVuLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhc3Rlcm9pZHMiLCJpbml0IiwiZ2FtZUxvb3AiLCJjdHgiLCJsYXN0R2FtZVRpY2siLCJzaGlwIiwiYnVsbGV0Iiwia2V5Iiwid2lkdGgiLCJoZWlnaHQiLCJodWQiLCJjYW52YXNJZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiY2FudmFzVXRpbHMiLCJmdWxsV2luZG93IiwicmVzaXplT25XaW5kb3dSZXNpemUiLCJTaGlwIiwibW92ZVRvIiwiVmVjdG9yIiwiQnVsbGV0IiwidXBkYXRlIiwidGQiLCJnZXRQb3NpdGlvbiIsInJlbmRlciIsImNsZWFyUmVjdCIsImRyYXciLCJub3ciLCJEYXRlIiwicmVxdWVzdEFuaW1GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbFJlcXVlc3RBbmltRnJhbWUiLCJjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJNYXRoIiwiZmxvb3IiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ4IiwieSIsInNjYWxhciIsInZlY3RvciIsInByZXNzZWQiLCJldmVudCIsImtleUNvZGUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJTUEFDRSIsIkEiLCJTIiwiRCIsIlciLCJpc0Rvd24iLCJrZXkxIiwia2V5MiIsIm9wdGlvbnMiLCJmb3JjZSIsIkZvcmNlIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsInNwZWVkIiwiZGlyZWN0aW9uIiwiYWNjZWxlcmF0ZUZvcmNlIiwiY3JlYXRlQWNjZWxlcmF0aW9uIiwiYnJlYWtGb3JjZSIsImNyZWF0ZURhbXBpbmciLCJkYW1wRm9yY2UiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJQSSIsImJlZ2luUGF0aCIsImxpbmVUbyIsImFyYyIsInN0cm9rZSIsInJlc3RvcmUiLCJjb3MiLCJzaW4iLCJpYWRkIiwibXVscyIsInRocm90dGxlIiwicm90YXRlTGVmdCIsImJyZWFrcyIsInJvdGF0ZVJpZ2h0IiwibW92ZUZvcndhcmQiLCJzdGF5SW5BcmVhIiwiYWxsIiwiZGFtcGluZyIsImltdWxzIiwiYWRkcyIsIm5hbWUiLCJjcmVhdGVXaW5kIiwib2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJidWxsZXRzIiwidGlja3NTaW5jZUxhc3RBZGQiLCJpIiwibGVuIiwibGVuZ3RoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImNsb25lIiwiYWRkIiwibW92ZSIsImZ1bGxzY3JlZW5FbGVtZW50IiwiaHVkSWQiLCJib2R5Iiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJhY3RpdmF0ZSIsImVsZW1lbnRJZCIsInNldEV2ZW50SGFuZGxlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ25DQTs7Ozs7O0FBSUE7OztBQUdBQSxRQUFPQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQ3hDOztBQUVBLE9BQUlDLFlBQVksMEJBQWhCOztBQUVBQSxhQUFVQyxJQUFWLENBQWUsU0FBZjtBQUNBRCxhQUFVRSxRQUFWO0FBQ0gsRUFQRCxFQU9HLEtBUEgsRSxDQVZBOzs7Ozs7Ozs7Ozs7OzttQkNXZSxZQUFXO0FBQ3RCOztBQUVBOztBQUNBLFNBQUlDLEdBQUo7O0FBRUE7QUFDQSxTQUFJQyxZQUFKOztBQUVBO0FBQ0EsU0FBSUMsSUFBSjs7QUFFQTtBQUNBLFNBQUlDLE1BQUo7O0FBRUE7QUFDQSxTQUFJQyxHQUFKOztBQUVBO0FBQ0EsU0FBSUMsS0FBSjtBQUNBLFNBQUlDLE1BQUo7O0FBRUE7QUFDQSxTQUFJQyxZQUFKOztBQUdBOzs7QUFHQSxjQUFTVCxJQUFULENBQWNVLFFBQWQsRUFBd0I7QUFDcEI7QUFDQSxhQUFJQyxTQUFTQyxTQUFTQyxjQUFULENBQXdCSCxRQUF4QixDQUFiO0FBQ0FSLGVBQU1TLE9BQU9HLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBTjs7QUFF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QSxTQUFJWCxNQUFNUyxPQUFPRyxVQUFQLENBQWtCLElBQWxCLENBQVY7O0FBRUNaLFNBQUlTLE1BQUosQ0FBV0osS0FBWCxHQUFvQnNDLEtBQUtDLEtBQUwsQ0FBV2pELE9BQU9rRCxVQUFsQixJQUFnQyxDQUFwRDtBQUNBN0MsU0FBSVMsTUFBSixDQUFXSCxNQUFYLEdBQW9CcUMsS0FBS0MsS0FBTCxDQUFXakQsT0FBT21ELFdBQWxCLElBQWlDLENBQXJEO0FBQ0o7O0FBSUQ7OztBQUdBcEMsWUFBU29ILGVBQVQsQ0FBeUIsa0JBQXpCLEVBQTZDLFlBQU07QUFDL0NaLGFBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBMUcsWUFBT0ssVUFBUDtBQUNILElBSEQ7O0FBT0E7OztBQUdBSixZQUFTb0gsZUFBVCxDQUF5QixpQkFBekIsRUFBNEMsWUFBTTtBQUM5Q1osYUFBUUMsR0FBUixDQUFZLHdCQUFaO0FBQ0gsSUFGRDs7QUFNQTs7O0FBR0EsVUFBTztBQUNIUyxlQUFVQTtBQURQLElBQVA7QUFHSCxFOztBQTlDRCIsImZpbGUiOiJ3ZWJyb290L2pzL2FzdGVyb2lkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhiNzE4Nzc5NDdlZGRlZTk5YjIyIiwiLyoqXG4gKiBNYWluIHByb2dyYW0sIHRvIHN0YXJ0IGFsbCB1cC5cbiAqL1xuaW1wb3J0IEFzdGVyb2lkcyBmcm9tIFwiYXN0ZXJvaWRzXCI7XG5cblxuXG4vKipcbiAqIE1haW4gdG8gc3RhcnQgYWxsIHVwLlxuICovXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGFzdGVyb2lkcyA9IEFzdGVyb2lkcygpO1xuXG4gICAgYXN0ZXJvaWRzLmluaXQoXCJjYW52YXMxXCIpO1xuICAgIGFzdGVyb2lkcy5nYW1lTG9vcCgpO1xufSwgZmFsc2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21haW4uanMiLCIvKipcbiAqIEFzdGVyb2lkcywgdGhlIEdhbWVcbiAqL1xuaW1wb3J0IFwidXRpbHMvcmVxdWVzdC1hbmltLWZyYW1lXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCJ1dGlscy9jYW52YXNcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcInV0aWxzL3ZlY3RvclwiO1xuaW1wb3J0IEtleSBmcm9tIFwidXRpbHMva2V5LWV2ZW50c1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcInNoaXBcIjtcbmltcG9ydCBCdWxsZXQgZnJvbSBcImJ1bGxldFwiO1xuaW1wb3J0IEh1ZCBmcm9tIFwiaHVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gSG9sZCBncmFwaWMgY29udGV4dFxuICAgIHZhciBjdHg7XG5cbiAgICAvLyBSZW1lbWJlciB0aGUgdGltZSBzaW5jZSBsYXN0IHVwZGF0ZSAmIHJlbmRlclxuICAgIHZhciBsYXN0R2FtZVRpY2s7XG5cbiAgICAvLyBIb2xkIHRoZSBzaGlwXG4gICAgdmFyIHNoaXA7XG5cbiAgICAvLyBIb2xkIHRoZSBidWxsZXRzXG4gICAgdmFyIGJ1bGxldDtcblxuICAgIC8vIE9iamVjdCBmb3Iga2V5cHJlc3NcbiAgICB2YXIga2V5O1xuXG4gICAgLy8gR2FtZSBhcmVhXG4gICAgdmFyIHdpZHRoO1xuICAgIHZhciBoZWlnaHQ7XG5cbiAgICAvLyBIdWRcbiAgICBsZXQgaHVkO1xuXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNpemUgb2YgdGhlIGNhbnZhcy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbml0KGNhbnZhc0lkKSB7XG4gICAgICAgIC8vIFNldCBjYW52YXMgZHJhd2luZyBjb250ZXh0XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XG4gICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy8gUmVzaXplIGNhbnZhcyBhbmQgbWFrZSBpdCBsaXN0ZW4gdG8gd2luZG93IHJlc2l6ZSBldmVudHNcbiAgICAgICAgdmFyIGNhbnZhc1V0aWxzID0gQ2FudmFzKCk7XG4gICAgICAgIGNhbnZhc1V0aWxzLmZ1bGxXaW5kb3coXCJjYW52YXMxXCIpO1xuICAgICAgICBjYW52YXNVdGlscy5yZXNpemVPbldpbmRvd1Jlc2l6ZShcImNhbnZhczFcIik7XG5cbiAgICAgICAgLy8gVE9ETyBOZWVkIHRvIHN1cHBvcnQgcmVzaXplXG4gICAgICAgIHdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICAgIC8vIERlZmF1bHQgZHJhdyBzdHlsZVxuICAgICAgICAvL2N0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAvL2N0eC5zdHJva2VTdHlsZSA9IFwiaHNsYSgwLDAlLCAxMDAlLCAxKVwiO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgc2hpcCBhbmQgcGxhY2UgaXQgaW4gdGhlIG1pZGRsZVxuICAgICAgICBzaGlwID0gbmV3IFNoaXAoKTtcbiAgICAgICAgc2hpcC5tb3ZlVG8obmV3IFZlY3RvcihjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMikpO1xuXG4gICAgICAgIC8vIEFkZCBCdWxsZXRzXG4gICAgICAgIGJ1bGxldCA9IG5ldyBCdWxsZXQoKTtcblxuICAgICAgICAvLyBLZXkgcHJlc3NlZFxuICAgICAgICBrZXkgPSBLZXkoKTtcblxuICAgICAgICAvLyBIdWRcbiAgICAgICAgaHVkID0gSHVkKCk7XG4gICAgICAgIGh1ZC5pbml0KCk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlKHRkKSB7XG4gICAgICAgIHNoaXAudXBkYXRlKGtleSwgdGQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBidWxsZXQudXBkYXRlKGtleSwgdGQsIHNoaXAuZ2V0UG9zaXRpb24oKSk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBzaGlwLmRyYXcoY3R4LCBrZXkpO1xuICAgICAgICBidWxsZXQuZHJhdyhjdHgpO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgICAgICAvLyBUaW1lZGlmZiBzaW5jZSBsYXN0IGZyYW1lIC8gZ2FtZXRpY2tcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciB0ZCA9IChub3cgLSAobGFzdEdhbWVUaWNrIHx8wqBub3cpKSAvIDEwMDA7XG4gICAgICAgIGxhc3RHYW1lVGljayA9IG5vdztcblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZShnYW1lTG9vcCk7XG4gICAgICAgIHVwZGF0ZSh0ZCk7XG4gICAgICAgIHJlbmRlcigpO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJldHVybiB7XG4gICAgICAgIFwiaW5pdFwiOiBpbml0LFxuICAgICAgICBcImdhbWVMb29wXCI6IGdhbWVMb29wXG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hc3Rlcm9pZHMuanMiLCIvKipcbiAqIFNoaW0gbGF5ZXIsIHBvbHlmaWxsLCBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHdpdGggc2V0VGltZW91dCBmYWxsYmFjay5cbiAqL1xuXG4vKipcbiAqIHJlcXVlc3RBbmltRnJhbWVcbiAqL1xud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XG4gICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKXtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICB9O1xufSkoKTtcblxuXG5cbi8qKlxuICogY2FuY2VsUmVxdWVzdEFuaW1GcmFtZVxuICovXG53aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgICAgICB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQ7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzL3JlcXVlc3QtYW5pbS1mcmFtZS5qcyIsIi8qKlxuICogQ2FudmFzIHV0aWxpdGllc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2l6ZSBvZiB0aGUgY2FudmFzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZ1bGxXaW5kb3coY2FudmFzSWQpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0lkKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgIGN0eC5jYW52YXMud2lkdGggID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCkgLSAxO1xuICAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCkgLSAxO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBSZXNpemUgb24gd2luZG93IHJlc2l6ZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZXNpemVPbldpbmRvd1Jlc2l6ZShjYW52YXNJZCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdWxsV2luZG93KGNhbnZhc0lkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIC8vIFJldHVybiB3aGF0cyBhY3R1YWxseSBleHBvcnRlZFxuICAgIHJldHVybiB7XG4gICAgICAgIGZ1bGxXaW5kb3c6IGZ1bGxXaW5kb3csXG4gICAgICAgIHJlc2l6ZU9uV2luZG93UmVzaXplOiByZXNpemVPbldpbmRvd1Jlc2l6ZVxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMvY2FudmFzLmpzIiwiLyoqXG4gKiBWZWN0b3IgbWF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4IHx8wqAwO1xuICAgICAgICB0aGlzLnkgPSB5IHx8wqAwO1xuICAgIH1cblxuICAgIC8vIE11bHRpcGx5IHdpdGggc2NhbGFyXG4gICAgbXVscyhzY2FsYXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54ICogc2NhbGFyLCB0aGlzLnkgKiBzY2FsYXIpO1xuICAgIH1cblxuICAgIC8vIE11bHRpcGx5IGl0c2VsZiB3aXRoIHNjYWxhclxuICAgIGltdWxzKHNjYWxhcikge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBNdWx0aXBseSB3aXRoIHNjYWxhclxuICAgIGFkZHMoc2NhbGFyKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCArIHNjYWxhciwgdGhpcy55ICsgc2NhbGFyKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgaXRzZWxmIHdpdGggVmVjdG9yXG4gICAgaWFkZCh2ZWN0b3IpIHtcbiAgICAgICAgdGhpcy54ICs9IHZlY3Rvci54O1xuICAgICAgICB0aGlzLnkgKz0gdmVjdG9yLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhIGNsb25lXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMvdmVjdG9yLmpzIiwiLyoqXG4gKiBUcmFjZSB0aGUga2V5cyBwcmVzc2VkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHByZXNzZWQgPSB7fTtcblxuICAgIC8vIE9uIGtleSByZWxlYXNlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBkZWxldGUgcHJlc3NlZFtldmVudC5rZXlDb2RlXTtcbiAgICB9KTtcblxuICAgIC8vIE9uIGtleSBwcmVzc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICBwcmVzc2VkW2V2ZW50LmtleUNvZGVdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIC8vIFJldHVybiB3aGF0IHRvIGV4cG9ydFxuICAgIHJldHVybiB7XG4gICAgICAgIExFRlQ6ICAgMzcsXG4gICAgICAgIFVQOiAgICAgMzgsXG4gICAgICAgIFJJR0hUOiAgMzksXG4gICAgICAgIERPV046ICAgNDAsXG4gICAgICAgIFNQQUNFOiAgMzIsXG4gICAgICAgIEE6ICAgICAgNjUsXG4gICAgICAgIFM6ICAgICAgODMsXG4gICAgICAgIEQ6ICAgICAgNjgsXG4gICAgICAgIFc6ICAgICAgODcsXG5cbiAgICAgICAgaXNEb3duOiBmdW5jdGlvbihrZXkxLCBrZXkyKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlc3NlZFtrZXkxXSB8fMKgcHJlc3NlZFtrZXkyXTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMva2V5LWV2ZW50cy5qcyIsIi8qKlxuICogVGhlIHNoaXAuXG4gKi9cbmltcG9ydCBWZWN0b3IgZnJvbSBcInV0aWxzL3ZlY3RvclwiO1xuaW1wb3J0IEZvcmNlIGZyb20gXCJ1dGlscy9mb3JjZVwiO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG5cbiAgICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgICB2YXIgZm9yY2UgPSBuZXcgRm9yY2UoKTtcblxuICAgICAgICAgdGhpcy5oZWlnaHQgICAgID0gb3B0aW9ucy5oZWlnaHQgfHzCoDIwO1xuICAgICAgICAgdGhpcy53aWR0aCAgICAgID0gb3B0aW9ucy53aWR0aCAgfHzCoDEwO1xuICAgICAgICAgdGhpcy5wb3NpdGlvbiAgID0gb3B0aW9ucy5wb3NpdGlvbiB8fCBuZXcgVmVjdG9yKCk7XG4gICAgICAgICB0aGlzLnZlbG9jaXR5ICAgPSBvcHRpb25zLnZlbG9jaXR5IHx8wqBuZXcgVmVjdG9yKCk7XG4gICAgICAgICB0aGlzLnNwZWVkICAgICAgPSBvcHRpb25zLnNwZWVkIHx8IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgIHRoaXMuZGlyZWN0aW9uICA9IG9wdGlvbnMuZGlyZWN0aW9uIHx8wqAwO1xuXG4gICAgICAgICB0aGlzLmFjY2VsZXJhdGVGb3JjZSA9IG9wdGlvbnMuYWNjZWxlcmF0ZUZvcmNlXG4gICAgICAgICAgICB8fMKgZm9yY2UuY3JlYXRlQWNjZWxlcmF0aW9uKG5ldyBWZWN0b3IoODAsIDgwKSk7XG4gICAgICAgICB0aGlzLmJyZWFrRm9yY2UgPSBvcHRpb25zLmJyZWFrRm9yY2UgfHzCoGZvcmNlLmNyZWF0ZURhbXBpbmcoMC45Nyk7XG4gICAgICAgICB0aGlzLmRhbXBGb3JjZSAgPSBvcHRpb25zLmRhbXBGb3JjZSAgfHzCoGZvcmNlLmNyZWF0ZURhbXBpbmcoMC45OTkpO1xuICAgIH1cblxuXG5cbiAgICBkcmF3KGN0eCwga2V5KSB7XG4gICAgICAgIHZhciB4ID0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHZhciB5ID0gdGhpcy5oZWlnaHQgLyAyO1xuXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnaHNsYSgwLDAlLDEwMCUsMSknO1xuXG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgICAgICBjdHgucm90YXRlKHRoaXMuZGlyZWN0aW9uICsgTWF0aC5QSSAvIDIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgLXkpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgICAgICBjdHgubGluZVRvKDAsIDAuOCAqIHkpO1xuICAgICAgICBjdHgubGluZVRvKC14LCB5KTtcbiAgICAgICAgY3R4LmxpbmVUbygwLCAteSk7XG5cbiAgICAgICAgaWYgKGtleS5pc0Rvd24oa2V5LlVQLCBrZXkuVykpIHtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgeSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKC0yLCB5ICsgMTApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygwLCB5ICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDIsIHkgKyAxMCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKDAsIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc0Rvd24oa2V5LkRPV04sIGtleS5TKSkge1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh5ICsgNCwgMCk7XG4gICAgICAgICAgICBjdHguYXJjKDAsIDAsIHkgKyA0LCAwLCBNYXRoLlBJLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cblxuXG4gICAgbW92ZVRvKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5oZWlnaHQgLyAyO1xuICAgIH1cblxuXG5cbiAgICBtb3ZlRm9yd2FyZCh0ZCkge1xuICAgICAgICB0aGlzLmRhbXBGb3JjZSh0aGlzLnNwZWVkLCB0ZCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkLnggKiBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbikgKiB0ZDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWQueSAqIE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHRkO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmlhZGQodGhpcy52ZWxvY2l0eS5tdWxzKHRkKSk7XG4gICAgfVxuXG5cbiAgICB0aHJvdHRsZSh0ZCkge1xuICAgICAgICB0aGlzLmFjY2VsZXJhdGVGb3JjZSh0aGlzLnNwZWVkLCB0ZCk7XG4gICAgfVxuXG5cblxuICAgIHJvdGF0ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uIC09IE1hdGguUEkgLyAzMDtcbiAgICB9XG5cblxuXG4gICAgcm90YXRlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uICs9IE1hdGguUEkgLyAzMDtcbiAgICB9XG5cblxuXG4gICAgYnJlYWtzKHRkKSB7XG4gICAgICAgIHRoaXMuYnJlYWtGb3JjZSh0aGlzLnNwZWVkLCB0ZCk7XG4gICAgICAgIHRoaXMuYnJlYWtGb3JjZSh0aGlzLnZlbG9jaXR5LCB0ZCk7XG4gICAgfVxuXG5cblxuICAgIHVwZGF0ZShrZXksIHRkLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmIChrZXkuaXNEb3duKGtleS5VUCwga2V5LlcpKSB7XG4gICAgICAgICAgICB0aGlzLnRocm90dGxlKHRkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkuaXNEb3duKGtleS5MRUZULCBrZXkuQSkpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc0Rvd24oa2V5LkRPV04sIGtleS5TKSkge1xuICAgICAgICAgICAgdGhpcy5icmVha3ModGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleS5pc0Rvd24oa2V5LlJJR0hULCBrZXkuRCkpIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlUmlnaHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRm9yY2VzLnVwZGF0ZSh0aGlzLnZlbG9jaXR5LCB0ZCk7XG4gICAgICAgIHRoaXMubW92ZUZvcndhcmQodGQpO1xuICAgICAgICB0aGlzLnN0YXlJbkFyZWEod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG5cblxuICAgIHN0YXlJbkFyZWEod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDwgLXRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ID4gaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSAtdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ID4gd2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IC10aGlzLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IC10aGlzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NoaXAuanMiLCIvKipcbiAqIFRoZSBmb3JjZSBhcm91bmQgdXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFsbCA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY2VsZXJhdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuICh2ZWxvY2l0eSwgdGQpID0+IHtcbiAgICAgICAgICAgIHZlbG9jaXR5LmlhZGQodmVjdG9yLm11bHModGQpKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVEYW1waW5nKGRhbXBpbmcpIHtcbiAgICAgICAgcmV0dXJuICh2ZWxvY2l0eSAvKiwgdGQgKi8pID0+IHtcbiAgICAgICAgICAgIHZlbG9jaXR5LmltdWxzKGRhbXBpbmcpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZVdpbmQodmVjdG9yKSB7XG4gICAgICAgIHJldHVybiAodmVsb2NpdHksIHRkKSA9PiB7XG4gICAgICAgICAgICB2ZWxvY2l0eS5pYWRkKHZlY3Rvci5hZGRzKHRkKSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWRkQWNjZWxlcmF0aW9uKG5hbWUsIHZlY3Rvcikge1xuICAgICAgICB0aGlzLmFsbFtuYW1lXSA9IHRoaXMuY3JlYXRlQWNjZWxlcmF0aW9uKHZlY3Rvcik7XG4gICAgfVxuXG4gICAgYWRkRGFtcGluZyhuYW1lLCBkYW1waW5nKSB7XG4gICAgICAgIHRoaXMuYWxsW25hbWVdID0gdGhpcy5jcmVhdGVEYW1waW5nKGRhbXBpbmcpO1xuICAgIH1cblxuICAgIGFkZFdpbmQobmFtZSwgdmVjdG9yKSB7XG4gICAgICAgIHRoaXMuYWxsW25hbWVdID0gdGhpcy5jcmVhdGVXaW5kKHZlY3Rvcik7XG4gICAgfVxuXG4gICAgdXBkYXRlKG9iamVjdCwgdGQpIHtcbiAgICAgICAgZm9yICh2YXIgZm9yY2UgaW4gdGhpcy5hbGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbC5oYXNPd25Qcm9wZXJ0eShmb3JjZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFtmb3JjZV0ob2JqZWN0LCB0ZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMvZm9yY2UuanMiLCIvKipcbiAqIEJ1bGxldHMuXG4gKi9cbmltcG9ydCBWZWN0b3IgZnJvbSBcInV0aWxzL3ZlY3RvclwiO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IHtcblxuICAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcblxuXG4vLy9cblxuICAgICAgICAgdGhpcy5oZWlnaHQgICAgID0gb3B0aW9ucy5oZWlnaHQgfHzCoDIwO1xuICAgICAgICAgdGhpcy53aWR0aCAgICAgID0gb3B0aW9ucy53aWR0aCAgfHzCoDEwO1xuICAgICAgICAgdGhpcy5wb3NpdGlvbiAgID0gb3B0aW9ucy5wb3NpdGlvbiB8fCBuZXcgVmVjdG9yKCk7XG4gICAgICAgICB0aGlzLnZlbG9jaXR5ICAgPSBvcHRpb25zLnZlbG9jaXR5IHx8wqBuZXcgVmVjdG9yKCk7XG4gICAgICAgICB0aGlzLnNwZWVkICAgICAgPSBvcHRpb25zLnNwZWVkIHx8IG5ldyBWZWN0b3IoKTtcbiAgICAgICAgIHRoaXMuZGlyZWN0aW9uICA9IG9wdGlvbnMuZGlyZWN0aW9uIHx8wqAwO1xuICAgICAgICAgdGhpcy5idWxsZXRzID0gW107XG4gICAgICAgICB0aGlzLnRpY2tzU2luY2VMYXN0QWRkID0gMDtcblxuICAgIH1cblxuXG5cbiAgICBkcmF3KGN0eCwga2V5KSB7XG5cbiAgICAgICAgY3R4LnNhdmUoKTtcblxuICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gNTtcbiAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gJ2hzbGEoMCwwJSwxMDAlLDEpJztcblxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjAwLDAsMClcIjtcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0ICgxMCwgMTAsIDUwLCA1MCk7XG5cbiAgICAgICAgLy8gY3R4Lm1vdmVUbygxMDAsIDEwMCk7XG4gICAgICAgIC8vIGN0eC5saW5lVG8oMjAwLCAyMDApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYnVsbGV0cy5sZW5ndGgpO1xuICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5idWxsZXRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gY3R4LnRyYW5zbGF0ZSh0aGlzLmJ1bGxldHNbaV0ueCwgdGhpcy5idWxsZXRzW2ldLnkpO1xuICAgICAgICAgICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgLy8gY3R4Lm1vdmVUbyh0aGlzLmJ1bGxldHNbaV0ueCwgdGhpcy5idWxsZXRzW2ldLnkpO1xuICAgICAgICAgICAgLy8gY3R4LmxpbmVUbyh0aGlzLmJ1bGxldHNbaV0ueCArIDEwLCB0aGlzLmJ1bGxldHNbaV0ueSArIDEwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9jdHgubW92ZVRvKDAsIDApO1xuICAgICAgICAgICAgLy9jdHgubGluZVRvKDEwLCAxMCk7XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCAoXG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzW2ldLngsXG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzW2ldLnksXG4gICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzW2ldLnggKyAxMCxcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGxldHNbaV0ueSArIDEwXG4gICAgICAgICAgICApOyovXG4vKlxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmJ1bGxldHNbaV0ueCArIDQwLCB0aGlzLmJ1bGxldHNbaV0ueSArIDQwKTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMTAsIDEwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsIDI1NSwgMjU1KVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0ICh0aGlzLmJ1bGxldHNbaV0ueCwgdGhpcy5idWxsZXRzW2ldLnksIDQsIDQpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG5cblxuICAgIGFkZChwb3NpdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJ1bGxldHMubGVuZ3RoKTtcblxuICAgICAgICBpZiAodGhpcy5idWxsZXRzLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1bGxldHMucHVzaChwb3NpdGlvbi5jbG9uZSgpKTtcbiAgICAgICAgICAgIHRoaXMudGlja3NTaW5jZUxhc3RBZGQgPSAxMDtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBtb3ZlKHRkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmJ1bGxldHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0c1tpXS54ICs9IDE7XG4gICAgICAgICAgICB0aGlzLmJ1bGxldHNbaV0ueSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIHRoaXMuZGFtcEZvcmNlKHRoaXMuc3BlZWQsIHRkKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQueCAqIE1hdGguY29zKHRoaXMuZGlyZWN0aW9uKSAqIHRkO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZC55ICogTWF0aC5zaW4odGhpcy5kaXJlY3Rpb24pICogdGQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24uaWFkZCh0aGlzLnZlbG9jaXR5Lm11bHModGQpKTtcbiAgICAgICAgKi9cbiAgICB9XG5cblxuXG4gICAgdXBkYXRlKGtleSwgdGQsIHBvc2l0aW9uKSB7XG4gICAgICAgIC8vIERlbGF5IHNob3Qgd2hlbiByZWNlbnRseSBkaWQgc2hvb3RcbiAgICAgICAgaWYgKHRoaXMudGlja3NTaW5jZUxhc3RBZGQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpY2tzU2luY2VMYXN0QWRkLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5LmlzRG93bihrZXkuU1BBQ0UpICYmIHRoaXMudGlja3NTaW5jZUxhc3RBZGQgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vRm9yY2VzLnVwZGF0ZSh0aGlzLnZlbG9jaXR5LCB0ZCk7XG4gICAgICAgIHRoaXMubW92ZSh0ZCk7XG4gICAgICAgIC8vdGhpcy5zdGF5SW5BcmVhKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuXG5cbiAgICBzdGF5SW5BcmVhKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IC10aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA+IGhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gLXRoaXMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAtdGhpcy53aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAtdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYnVsbGV0LmpzIiwiLyoqXG4gKiBIZWFkcy11cCBkaXNwbGF5XG4gKi9cbmltcG9ydCBGdWxsU2NyZWVuIGZyb20gXCJ1dGlscy9mdWxsc2NyZWVuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGZ1bGxzY3JlZW5FbGVtZW50O1xuXG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIHRoZSBIdWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdChodWRJZCkge1xuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keTFcIik7XG4gICAgICAgIGxldCBmdWxsc2NyZWVuRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVsbHNjcmVlblwiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXQgaHVkXCIpO1xuICAgICAgICBmdWxsc2NyZWVuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IGZ1bGxzY3JlZW5cIik7XG4gICAgICAgICAgICBib2R5LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gd2hhdHMgYWN0dWFsbHkgZXhwb3J0ZWRcbiAgICAgKi9cbiAgICByZXR1cm4ge1xuICAgICAgICBcImluaXRcIjogaW5pdFxuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaHVkLmpzIiwiLyoqXG4gKiBGdWxsc2NyZWVuIHV0aWxpdGllc1xuICovXG5pbXBvcnQgQ2FudmFzIGZyb20gXCJ1dGlscy9jYW52YXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgbGV0IGNhbnZhcyA9IENhbnZhcygpO1xuXG5cblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlIHRoZSBmdWxsc2NyZWVuIG9mIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFjdGl2YXRlKGVsZW1lbnRJZCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgIGN0eC5jYW52YXMud2lkdGggID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCkgLSAxO1xuICAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCkgLSAxO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBFdmVudGhhbmRsZXIgd2hlbiBmdWxsc2NyZWVuIGV2ZW50IHN1Y2NlZWRlZC5cbiAgICAgKi9cbiAgICBkb2N1bWVudC5zZXRFdmVudEhhbmRsZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudCBmdWxsc2NyZWVuIGNoYW5nZVwiKTtcbiAgICAgICAgY2FudmFzLmZ1bGxXaW5kb3coKTtcbiAgICB9KTtcblxuXG5cbiAgICAvKipcbiAgICAgKiBFdmVudGhhbmRsZXIgd2hlbiBmdWxsc2NyZWVuIGV2ZW50IGZhaWxlZC5cbiAgICAgKi9cbiAgICBkb2N1bWVudC5zZXRFdmVudEhhbmRsZXIoXCJmdWxsc2NyZWVuZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50IGZ1bGxzY3JlZW4gZXJyb3JcIik7XG4gICAgfSk7XG5cblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHdoYXRzIGFjdHVhbGx5IGV4cG9ydGVkXG4gICAgICovXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZhdGU6IGFjdGl2YXRlXG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91dGlscy9mdWxsc2NyZWVuLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==