(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"com_atlas_", frames: [[0,0,983,1078],[830,1080,465,705],[0,1654,392,379],[985,529,293,371],[394,1654,388,348],[985,0,299,527],[0,1080,828,572]]}
];


// symbols:



(lib.com_1 = function() {
	this.initialize(ss["com_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.couple = function() {
	this.initialize(ss["com_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hommeacotecouple = function() {
	this.initialize(ss["com_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hommeblessé = function() {
	this.initialize(ss["com_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hommefou = function() {
	this.initialize(ss["com_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hommeorilla = function() {
	this.initialize(ss["com_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.HommeDrapeau = function() {
	this.initialize(ss["com_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.com = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// homme_fou
	this.instance = new lib.hommefou();
	this.instance.setTransform(9,441,0.9455,0.7925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:1.0406,scaleY:0.8722,x:-9,y:427},0).wait(5).to({scaleX:1.0977,scaleY:0.92,x:-20,y:428},0).wait(5).to({scaleX:1.0195,scaleY:0.8545,x:-5,y:439},0).wait(5).to({scaleX:0.9777,scaleY:0.8194,x:3,y:445},0).wait(5).to({scaleX:1.0457,scaleY:0.8764,x:-10,y:435},0).wait(7));

	// homme_blessé
	this.instance_1 = new lib.hommeblessé();
	this.instance_1.setTransform(551,151,1.0207,0.8555);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({scaleX:1.1409,scaleY:0.9562,x:541,y:132},0).wait(5).to({scaleX:1.1839,scaleY:0.9923,x:535,y:125},0).wait(5).to({scaleX:1.0979,scaleY:0.9202,x:548,y:138},0).wait(5).to({scaleX:1.0194,scaleY:0.8544,x:549,y:150},0).wait(5).to({scaleX:1.1026,scaleY:0.9241,x:545,y:137},0).wait(7));

	// couple
	this.instance_2 = new lib.couple();
	this.instance_2.setTransform(172,23,0.988,0.8281);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({scaleX:1.0658,scaleY:0.8933,x:154,y:0},0).wait(5).to({scaleX:1.1171,scaleY:0.9362,x:142,y:-15},0).wait(5).to({scaleX:1.0529,scaleY:0.8824,x:157,y:4},0).wait(5).to({scaleX:0.9945,scaleY:0.8335,x:171,y:21},0).wait(5).to({scaleX:1.0289,scaleY:0.8623,x:163,y:11},0).wait(7));

	// homme_a_cote___couple
	this.instance_3 = new lib.hommeacotecouple();
	this.instance_3.setTransform(5,253,0.9455,0.7925);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({scaleX:1.0114,scaleY:0.8477,x:-8,y:243},0).wait(5).to({scaleX:1.1146,scaleY:0.9342,x:-28,y:227},0).wait(5).to({scaleX:1.0511,scaleY:0.8809,x:-16,y:237},0).wait(5).to({scaleX:0.9873,scaleY:0.8275,x:-3,y:247},0).wait(5).to({scaleX:1.0472,scaleY:0.8777,x:-15,y:237},0).wait(7));

	// homme_orilla
	this.instance_4 = new lib.hommeorilla();
	this.instance_4.setTransform(0,36,0.9455,0.8209);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({scaleX:1.0024,scaleY:0.8703,y:23},0).wait(5).to({scaleX:1.0591,scaleY:0.9195,y:9},0).wait(5).to({scaleX:0.9928,scaleY:0.8619,y:25},0).wait(5).to({scaleX:0.9351,scaleY:0.8118,y:39},0).wait(5).to({scaleX:0.9928,scaleY:0.8619,y:26},0).wait(7));

	// Homme__Drapeau
	this.instance_5 = new lib.HommeDrapeau();
	this.instance_5.setTransform(-5,404,0.9853,0.8258);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({scaleX:0.997,x:-10},0).wait(5).to({scaleX:1.0276,x:-33},0).wait(5).to({scaleX:0.9908,x:-16},0).wait(5).to({scaleX:0.9663,scaleY:0.8054,x:3,y:410},0).wait(5).to({scaleX:1.0029,scaleY:0.8359,x:-12,y:401},0).wait(7));

	// com
	this.instance_6 = new lib.com_1();
	this.instance_6.setTransform(0,0,0.9766,0.8119);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(447,423,513,456.20000000000005);
// library properties:
lib.properties = {
	id: 'CEC8651DAB923D45BE632E16982CCE9F',
	width: 960,
	height: 876,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/com_atlas_.png?1583928258795", id:"com_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CEC8651DAB923D45BE632E16982CCE9F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjsCom = createjsCom||{}, AdobeAn = AdobeAn||{});
var createjsCom, AdobeAn;