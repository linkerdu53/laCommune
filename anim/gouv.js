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
	this.instance.setTransform(720,442,0.6796,0.6796);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:0.7051,scaleY:0.7051,x:712,y:425},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:693,y:391},0).wait(4).to({scaleX:0.8021,scaleY:0.8021,x:678,y:362},0).wait(5).to({scaleX:0.8532,scaleY:0.8532,x:660,y:331},0).wait(4).to({scaleX:0.896,scaleY:0.896,x:645,y:304},0).wait(6));

	// fille
	this.instance_1 = new lib.fille();
	this.instance_1.setTransform(653,643,0.6796,0.6796);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:0.7051,scaleY:0.7051,x:642,y:634},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:618,y:616},0).wait(4).to({scaleX:0.8021,scaleY:0.8021,x:598,y:600},0).wait(5).to({scaleX:0.8532,scaleY:0.8532,x:575,y:584},0).wait(4).to({scaleX:0.896,scaleY:0.896,x:555,y:570},0).wait(6));

	// femme
	this.instance_2 = new lib.femme();
	this.instance_2.setTransform(679,397,0.6796,0.6796);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleX:0.7051,scaleY:0.7051,x:669,y:379},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:647,y:342},0).wait(4).to({scaleX:0.8021,scaleY:0.8021,x:629,y:310},0).wait(5).to({scaleX:0.8532,scaleY:0.8532,x:608,y:275},0).wait(4).to({scaleX:0.896,scaleY:0.896,x:590,y:245},0).wait(6));

	// soldat
	this.instance_3 = new lib.soldat();
	this.instance_3.setTransform(273,340,0.6796,0.6796);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({scaleX:0.7051,scaleY:0.7051,x:248,y:320},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:195,y:279},0).wait(4).to({scaleX:0.8021,scaleY:0.8021,x:151,y:243},0).wait(5).to({scaleX:0.8532,scaleY:0.8532,x:99,y:204},0).wait(4).to({scaleX:0.896,scaleY:0.896,x:55,y:170},0).wait(6));

	// soldiers
	this.instance_4 = new lib.soldiers();
	this.instance_4.setTransform(391,233,0.6796,0.6796);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({scaleX:0.7051,scaleY:0.7051,x:371,y:209},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:327,y:159},0).wait(4).to({scaleX:0.8021,scaleY:0.8021,x:290,y:116},0).wait(5).to({scaleX:0.8532,scaleY:0.8532,x:247,y:69},0).wait(4).to({scaleX:0.896,scaleY:0.896,x:211,y:29},0).wait(6));

	// parroco
	this.instance_5 = new lib.parroco();
	this.instance_5.setTransform(834,203,0.6796,0.6796);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({scaleX:0.7051,scaleY:0.7051,x:830,y:177},0).wait(4).to({scaleX:0.7575,scaleY:0.7575,x:820,y:125},0).wait(4).to({scaleX:0.8021,scaleY:0.8021,x:812,y:80},0).wait(5).to({scaleX:0.8532,scaleY:0.8532,x:802,y:31},0).wait(4).to({scaleX:0.896,scaleY:0.896,x:794,y:-11},0).wait(6));

	// gouv
	this.instance_6 = new lib.gouv_1();
	this.instance_6.setTransform(0,0,1.0224,0.8119);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,427,480.5,449.5);
// library properties:
lib.properties = {
	id: '62F65144A56FC34E967856508F916E16',
	width: 960,
	height: 876,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/gouv_atlas_.png?1583928742424", id:"gouv_atlas_"}
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