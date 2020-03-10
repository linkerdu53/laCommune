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
	this.instance.setTransform(8,328,0.7251,0.6077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleX:0.7622,scaleY:0.5458,rotation:4.475,x:1.4,y:322.35},0).wait(5).to({scaleX:0.7703,scaleY:0.5516,rotation:4.4739,x:-1.5,y:325.35},0).wait(5).to({scaleX:0.7805,scaleY:0.5589,rotation:0.4818,x:-10.35,y:340},0).wait(1).to({rotation:0.4818},0).wait(5).to({scaleX:0.8411,scaleY:0.6023,rotation:0.4805,x:-21.25,y:333},0).wait(13));

	// homme_blessé
	this.instance_1 = new lib.hommeblessé();
	this.instance_1.setTransform(420,119,0.7251,0.6077);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({scaleX:0.7372,scaleY:0.6179,x:418,y:117},0).wait(5).to({scaleX:0.7596,scaleY:0.6367,x:415,y:114},0).wait(5).to({scaleX:0.8452,scaleY:0.7084,x:408,y:101},0).wait(6).to({scaleX:0.7647,scaleY:0.6269,x:417,y:116},0).wait(6).to({scaleX:0.7212,scaleY:0.5912,x:421,y:123},0).wait(7));

	// homme_a_cote___couple
	this.instance_2 = new lib.hommeacotecouple();
	this.instance_2.setTransform(8,189,0.7251,0.6077);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({scaleX:0.7742,scaleY:0.6489,x:-7,y:181},0).wait(5).to({scaleX:0.824,scaleY:0.6921,x:-17,y:173},0).wait(5).to({scaleY:0.7298,y:166},0).wait(6).to({scaleX:0.7553,scaleY:0.669,x:-7,y:178},0).wait(13));

	// homme_orilla
	this.instance_3 = new lib.hommeorilla();
	this.instance_3.setTransform(8,30,0.7251,0.6077);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({scaleX:0.7661,scaleY:0.6421,x:0,y:21},0).wait(5).to({scaleX:0.803,scaleY:0.673,x:-6,y:13},0).wait(5).to({scaleX:0.8162,scaleY:0.6841,x:-8,y:10},0).wait(6).to({scaleX:0.8001,scaleY:0.6706,x:-5,y:14},0).wait(6).to({scaleX:0.7561,scaleY:0.6338,x:2,y:24},0).wait(7));

	// couple
	this.instance_4 = new lib.couple();
	this.instance_4.setTransform(140,18,0.7251,0.6077);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({scaleX:0.7642,scaleY:0.6405,x:131,y:6},0).wait(5).to({scaleX:0.8027,scaleY:0.6728,x:122,y:-5},0).wait(5).to({scaleX:0.8303,scaleY:0.6959,x:106,y:-23},0).wait(6).to({scaleX:0.7695,scaleY:0.645,x:120,y:-5},0).wait(6).to({scaleX:0.7338,scaleY:0.6151,x:128,y:6},0).wait(7));

	// Homme__Drapeau
	this.instance_5 = new lib.HommeDrapeau();
	this.instance_5.setTransform(0,307,0.7389,0.6193);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({scaleY:0.6466,y:299},0).wait(5).to({scaleX:0.7524,scaleY:0.6584,x:-6,y:296},0).wait(5).to({scaleX:0.7665,scaleY:0.6708,x:-12,y:292},0).wait(6).to({scaleX:0.7293,scaleY:0.6382,x:3,y:301},0).wait(13));

	// com
	this.instance_6 = new lib.com_1();
	this.instance_6.setTransform(0,0,0.7375,0.6132);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339.5,307.5,385.5,368.20000000000005);
// library properties:
lib.properties = {
	id: 'CEC8651DAB923D45BE632E16982CCE9F',
	width: 725,
	height: 661,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/com_atlas_.png?1583778405339", id:"com_atlas_"}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;