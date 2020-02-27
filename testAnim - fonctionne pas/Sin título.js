(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Sin título_atlas_", frames: [[795,1422,340,516],[1137,1422,382,342],[1575,1082,351,638],[0,0,1920,1080],[0,1082,793,788],[795,1082,778,338]]},
		{name:"Sin título_atlas_2", frames: [[0,0,185,404]]}
];


// symbols:



(lib.femme = function() {
	this.initialize(ss["Sin título_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fille = function() {
	this.initialize(ss["Sin título_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hommeencrient = function() {
	this.initialize(ss["Sin título_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.parroco = function() {
	this.initialize(ss["Sin título_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rouge = function() {
	this.initialize(ss["Sin título_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.soldat = function() {
	this.initialize(ss["Sin título_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.soldiers = function() {
	this.initialize(ss["Sin título_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.Sintítulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// homme_en_crient
	this.instance = new lib.hommeencrient();
	this.instance.setTransform(1569,442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.0302,scaleY:1.0302,x:1574,y:438},0).wait(2).to({scaleX:1.0584,scaleY:1.0584,x:1578,y:434},0).wait(2).to({scaleX:1.0841,scaleY:1.0841,x:1582,y:430},0).wait(2).to({scaleX:1.1168,scaleY:1.1168,x:1587,y:425},0).wait(2).to({x:1568,y:375},0).wait(3).to({x:1551,y:356},0).wait(3));

	// femme
	this.instance_1 = new lib.femme();
	this.instance_1.setTransform(1508,376);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({scaleX:1.0302,scaleY:1.0302,x:1511,y:370},0).wait(2).to({scaleX:1.0584,scaleY:1.0584,x:1514,y:364},0).wait(2).to({scaleX:1.0841,scaleY:1.0841,x:1516,y:359},0).wait(2).to({scaleX:1.1168,scaleY:1.1168,x:1519,y:352},0).wait(2).to({x:1500,y:302},0).wait(3).to({x:1483,y:283},0).wait(3));

	// fille
	this.instance_2 = new lib.fille();
	this.instance_2.setTransform(1468,738);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({scaleX:1.0302,scaleY:1.0302,x:1470,y:743},0).wait(2).to({scaleX:1.0584,scaleY:1.0584,x:1472,y:747},0).wait(2).to({scaleX:1.0841,scaleY:1.0841,x:1473,y:751},0).wait(2).to({scaleX:1.1168,scaleY:1.1168,x:1475,y:756},0).wait(2).to({x:1456,y:706},0).wait(3).to({x:1439,y:687},0).wait(3));

	// soldat
	this.instance_3 = new lib.soldat();
	this.instance_3.setTransform(910,292);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({scaleX:1.0302,scaleY:1.0302,x:895,y:283},0).wait(2).to({scaleX:1.0584,scaleY:1.0584,x:881,y:275},0).wait(2).to({scaleX:1.0841,scaleY:1.0841,x:868,y:267},0).wait(2).to({scaleX:1.1168,scaleY:1.1168,x:852,y:257},0).wait(2).to({x:833,y:207},0).wait(3).to({x:816,y:188},0).wait(3));

	// soldiers
	this.instance_4 = new lib.soldiers();
	this.instance_4.setTransform(1082,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({scaleX:1.0302,scaleY:1.0302,x:1072,y:121},0).wait(2).to({scaleX:1.0584,scaleY:1.0584,x:1063,y:108},0).wait(2).to({scaleX:1.0841,scaleY:1.0841,x:1054,y:96},0).wait(2).to({scaleX:1.1168,scaleY:1.1168,x:1043,y:81},0).wait(2).to({x:1024,y:31},0).wait(3).to({x:1007,y:12},0).wait(3));

	// parroco
	this.instance_5 = new lib.parroco();
	this.instance_5.setTransform(1735,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({scaleX:1.0302,scaleY:1.0302,x:1745,y:75},0).wait(2).to({scaleX:1.0584,scaleY:1.0584,x:1754,y:61},0).wait(2).to({scaleX:1.0841,scaleY:1.0841,x:1762,y:48},0).wait(2).to({scaleX:1.1168,scaleY:1.1168,x:1772,y:32},0).wait(2).to({x:1753,y:-18},0).wait(3).to({x:1736,y:-37},0).wait(3));

	// rouge
	this.instance_6 = new lib.rouge();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,503,1019,635);
// library properties:
lib.properties = {
	id: '9E62EF8DFB1F8949A9E65019E6D4E47D',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Sin título_atlas_.png?1582807707562", id:"Sin título_atlas_"},
		{src:"images/Sin título_atlas_2.png?1582807707563", id:"Sin título_atlas_2"}
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
an.compositions['9E62EF8DFB1F8949A9E65019E6D4E47D'] = {
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