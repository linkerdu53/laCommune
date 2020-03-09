(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gouv_atlas_", frames: [[1291,0,340,516],[1291,518,382,342],[0,0,936,1080],[938,0,351,638],[938,640,185,404],[0,1082,793,788],[795,1082,778,338]]}
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



(lib.gouv1 = function() {
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
	this.instance.setTransform(1569,442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({scaleX:1.0324,scaleY:1.0324,x:1558,y:421},0).wait(3).to({scaleX:1.063,scaleY:1.063,x:1563,y:417},0).wait(3).to({scaleX:1.0955,scaleY:1.0955,x:1535,y:380},0).wait(4));

	// fille
	this.instance_1 = new lib.fille();
	this.instance_1.setTransform(1468,738);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({scaleX:1.0324,scaleY:1.0324,x:1454,y:727},0).wait(3).to({scaleX:1.063,scaleY:1.063,x:1456,y:732},0).wait(3).to({scaleX:1.0955,scaleY:1.0955,x:1425,y:705},0).wait(4));

	// femme
	this.instance_2 = new lib.femme();
	this.instance_2.setTransform(1508,376);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({scaleX:1.0324,scaleY:1.0324,x:1495,y:353},0).wait(3).to({scaleX:1.063,scaleY:1.063,x:1498,y:347},0).wait(3).to({scaleX:1.0955,scaleY:1.0955,x:1468,y:308},0).wait(4));

	// soldat
	this.instance_3 = new lib.soldat();
	this.instance_3.setTransform(910,292);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({scaleX:1.0324,scaleY:1.0324,x:878,y:267},0).wait(3).to({scaleX:1.063,scaleY:1.063,x:863,y:258},0).wait(3).to({scaleX:1.0955,scaleY:1.0955,x:814,y:216},0).wait(4));

	// soldiers
	this.instance_4 = new lib.soldiers();
	this.instance_4.setTransform(1082,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({scaleX:1.0324,scaleY:1.0324,x:1055,y:104},0).wait(3).to({scaleX:1.063,scaleY:1.063,x:1045,y:90},0).wait(3).to({scaleX:1.0955,scaleY:1.0955,x:1001,y:43},0).wait(4));

	// parroco
	this.instance_5 = new lib.parroco();
	this.instance_5.setTransform(1735,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({scaleX:1.0324,scaleY:1.0324,x:1729,y:58},0).wait(3).to({scaleX:1.063,scaleY:1.063,x:1739,y:43},0).wait(3).to({scaleX:1.0955,scaleY:1.0955,x:1716,y:-5},0).wait(4));

	// Capa_1
	this.instance_6 = new lib.gouv1();
	this.instance_6.setTransform(984,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1774,535,162.0999999999999,560.5999999999999);
// library properties:
lib.properties = {
	id: '006378417C7A7747A6A01F4C708A3409',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/gouv_atlas_.png?1582811713617", id:"gouv_atlas_"}
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
an.compositions['006378417C7A7747A6A01F4C708A3409'] = {
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