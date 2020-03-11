(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gouv_atlas_", frames: [[1294,0,340,516],[1294,518,382,342],[0,0,939,1078],[941,0,351,638],[941,640,185,404],[0,1080,793,788],[795,1080,778,338]]}
];


// symbols:



(lib.femme = function() {
	this.initialize(ss["gouv_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fille = function() {
	this.initialize(ss["gouv_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gouv_1 = function() {
	this.initialize(ss["gouv_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hommeencrient = function() {
	this.initialize(ss["gouv_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.parroco = function() {
	this.initialize(ss["gouv_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.soldat = function() {
	this.initialize(ss["gouv_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.soldiers = function() {
	this.initialize(ss["gouv_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.gouv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// homme_en_crient
	this.instance = new lib.hommeencrient();
	this.instance.setTransform(523,297,0.5706,0.5706);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:0.6027,scaleY:0.6027,x:513,y:276},0).wait(4).to({scaleX:0.6211,scaleY:0.6211,x:506,y:264},0).wait(4).to({scaleX:0.6356,scaleY:0.6356,x:500,y:254},0).wait(4).to({scaleX:0.6525,scaleY:0.6525,x:495,y:244},0).wait(4).to({scaleX:0.6688,scaleY:0.6688,x:489,y:234},0).wait(4).to({scaleX:0.6899,scaleY:0.6899,x:481,y:220},0).wait(4).to({scaleX:0.7159,scaleY:0.7159,x:470,y:204},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:458,y:177},0).wait(5));

	// fille
	this.instance_1 = new lib.fille();
	this.instance_1.setTransform(467,465,0.5706,0.5706);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:0.6027,scaleY:0.6027,x:454,y:454},0).wait(4).to({scaleX:0.6211,scaleY:0.6211,x:445,y:448},0).wait(4).to({scaleX:0.6356,scaleY:0.6356,x:438,y:442},0).wait(4).to({scaleX:0.6525,scaleY:0.6525,x:431,y:437},0).wait(4).to({scaleX:0.6688,scaleY:0.6688,x:424,y:431},0).wait(4).to({scaleX:0.6899,scaleY:0.6899,x:414,y:423},0).wait(4).to({scaleX:0.7159,scaleY:0.7159,x:400,y:415},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:384,y:400},0).wait(5));

	// femme
	this.instance_2 = new lib.femme();
	this.instance_2.setTransform(489,259,0.5706,0.5706);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleX:0.6027,scaleY:0.6027,x:477,y:236},0).wait(4).to({scaleX:0.6211,scaleY:0.6211,x:469,y:223},0).wait(4).to({scaleX:0.6356,scaleY:0.6356,x:462,y:212},0).wait(4).to({scaleX:0.6525,scaleY:0.6525,x:456,y:200},0).wait(4).to({scaleX:0.6688,scaleY:0.6688,x:450,y:189},0).wait(4).to({scaleX:0.6899,scaleY:0.6899,x:441,y:174},0).wait(4).to({scaleX:0.7159,scaleY:0.7159,x:428,y:157},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:414,y:127},0).wait(5));

	// soldat
	this.instance_3 = new lib.soldat();
	this.instance_3.setTransform(148,211,0.5706,0.5706);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({scaleX:0.6027,scaleY:0.6027,x:117,y:186},0).wait(4).to({scaleX:0.6211,scaleY:0.6211,x:98,y:172},0).wait(4).to({scaleX:0.6356,scaleY:0.6356,x:83,y:160},0).wait(4).to({scaleX:0.6525,scaleY:0.6525,x:66,y:147},0).wait(4).to({scaleX:0.6688,scaleY:0.6688,x:50,y:134},0).wait(4).to({scaleX:0.6899,scaleY:0.6899,x:28,y:117},0).wait(4).to({scaleX:0.7159,scaleY:0.7159,x:0,y:97},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:-39,y:64},0).wait(5));

	// soldiers
	this.instance_4 = new lib.soldiers();
	this.instance_4.setTransform(247,121,0.5706,0.5706);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({scaleX:0.6027,scaleY:0.6027,x:221,y:91},0).wait(4).to({scaleX:0.6211,scaleY:0.6211,x:205,y:74},0).wait(4).to({scaleX:0.6356,scaleY:0.6356,x:192,y:59},0).wait(4).to({scaleX:0.6525,scaleY:0.6525,x:178,y:43},0).wait(4).to({scaleX:0.6688,scaleY:0.6688,x:165,y:28},0).wait(4).to({scaleX:0.6899,scaleY:0.6899,x:147,y:7},0).wait(4).to({scaleX:0.7159,scaleY:0.7159,x:123,y:-17},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:91,y:-57},0).wait(5));

	// parroco
	this.instance_5 = new lib.parroco();
	this.instance_5.setTransform(619,96,0.5706,0.5706);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({scaleX:0.6027,scaleY:0.6027,x:614,y:64},0).wait(4).to({scaleX:0.6211,scaleY:0.6211,x:610,y:46},0).wait(4).to({scaleX:0.6356,scaleY:0.6356,x:607,y:31},0).wait(4).to({scaleX:0.6525,scaleY:0.6525,x:604,y:15},0).wait(4).to({scaleX:0.6688,scaleY:0.6688,x:601,y:-1},0).wait(4).to({scaleX:0.6899,scaleY:0.6899,x:597,y:-22},0).wait(4).to({scaleX:0.7159,scaleY:0.7159,x:590,y:-47},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:585,y:-89},0).wait(5));

	// gouv
	this.instance_6 = new lib.gouv_1();
	this.instance_6.setTransform(0,0,0.7721,0.6132);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(323.5,241.5,402,419.9);
// library properties:
lib.properties = {
	id: '62F65144A56FC34E967856508F916E16',
	width: 725,
	height: 661,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/gouv_atlas_.png?1583834644609", id:"gouv_atlas_"}
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
an.compositions['62F65144A56FC34E967856508F916E16'] = {
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


})(createjsGouv = createjsGouv||{}, AdobeAn = AdobeAn||{});
var createjsGouv, AdobeAn;