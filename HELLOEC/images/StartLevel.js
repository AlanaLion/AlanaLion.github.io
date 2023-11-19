(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"StartLevel_atlas_1", frames: [[0,0,2048,896],[0,898,2003,848]]},
		{name:"StartLevel_atlas_2", frames: [[842,289,565,287],[0,289,840,340],[1081,770,386,119],[0,891,303,119],[671,770,408,119],[1505,639,518,158],[1764,799,275,119],[1469,799,293,138],[0,631,1503,137],[1505,289,431,348],[0,770,669,119],[0,0,2048,287]]},
		{name:"StartLevel_atlas_3", frames: [[802,1229,974,618],[0,0,2003,647],[0,649,1600,578],[0,1229,800,800]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_19 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["StartLevel_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["StartLevel_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["StartLevel_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["StartLevel_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["StartLevel_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["StartLevel_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.EC_BG = function() {
	this.initialize(ss["StartLevel_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.START_Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(-137.9,-150,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_18();
	this.instance_1.setTransform(-210,-160,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.START_Button, new cjs.Rectangle(-210,-160,420,170), null);


(lib.P4_Button6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B55C32").ss(9,1,1).p("AzhkrMAnDAAAIAAJXMgnDAAAg");
	this.shape.setTransform(0,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(250,237,186,0.008)").s().p("AzhEsIAApXMAnDAAAIAAJXg");
	this.shape_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P4_Button6, new cjs.Rectangle(-129.5,-64.5,259,69), null);


(lib.P4_Button5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B55C32").ss(9,1,1).p("AzhkrMAnDAAAIAAJXMgnDAAAg");
	this.shape.setTransform(0,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(52,52,52,0.008)").s().p("AzhEsIAApXMAnDAAAIAAJXg");
	this.shape_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P4_Button5, new cjs.Rectangle(-129.5,-64.5,259,69), null);


(lib.P4_Button4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B55C32").ss(9,1,1).p("AzhkrMAnDAAAIAAJXMgnDAAAg");
	this.shape.setTransform(0,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(250,237,186,0.008)").s().p("AzhEsIAApXMAnDAAAIAAJXg");
	this.shape_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P4_Button4, new cjs.Rectangle(-129.5,-64.5,259,69), null);


(lib.P4_Button3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(-92.55,-59.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-129.5,-74.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P4_Button3, new cjs.Rectangle(-129.5,-74.5,259,79), null);


(lib.P4_Button2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-78.5,-59.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-129.5,-74.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P4_Button2, new cjs.Rectangle(-129.5,-74.5,259,79), null);


(lib.P4_Button1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(-101.55,-59.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-129.5,-74.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P4_Button1, new cjs.Rectangle(-129.5,-74.5,259,79), null);


(lib.P3_Next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-68.75,-60,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(-73.25,-64.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P3_Next, new cjs.Rectangle(-73.2,-64.5,146.5,69), null);


(lib.P2_Next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-512,-447.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-241.3,-78.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.P2_Next, new cjs.Rectangle(-512,-447.7,1024,448), null);


// stage content:
(lib.StartLevel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var that=this;
		this.START_Button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			that.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		var that=this;
		this.P2_Next.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			that.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.stop();
		var that=this;
		this.P3_Next.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			that.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		this.stop();
		var that=this;
		var onbutton=null;
		var ans=[null,null,null];
		document.onmousemove = move;
		function move(event){
			if(onbutton!=null){
				onbutton.x=event.clientX;
				onbutton.y=event.clientY;
			}
		}
		
		this.P4_Button1.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4()
		{
			if (onbutton==this.P4_Button1){
				onbutton=null;
			}else{
				onbutton=this.P4_Button1;
			}
		}
		this.P4_Button2.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		function fl_MouseClickHandler_5()
		{
			if(onbutton==this.P4_Button2){
				onbutton=null;
			}else{
				onbutton=this.P4_Button2;
			}
		}
		this.P4_Button3.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		function fl_MouseClickHandler_6()
		{
			if(onbutton==this.P4_Button3){
				onbutton=null;
			}else{
				onbutton=this.P4_Button3;
			}
		}
		//
		this.P4_Button4.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		function fl_MouseClickHandler_7()
		{
			if(onbutton!=null && ans[0]==null){
				onbutton.x=this.P4_Button4.x;
				onbutton.y=this.P4_Button4.y;
				ans[0]=onbutton;
				onbutton=null;
			}else if(onbutton==null && ans[0]!=null){
				onbutton=ans[0];
				ans[0]=null;
			}
		}
		this.P4_Button5.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		function fl_MouseClickHandler_8()
		{
			if(onbutton!=null && ans[1]==null){
				onbutton.x=this.P4_Button5.x;
				onbutton.y=this.P4_Button5.y;
				ans[1]=onbutton;
				onbutton=null;
			}else if(onbutton==null && ans[1]!=null){
				onbutton=ans[1];
				ans[1]=null;
			}
		}
		this.P4_Button6.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		function fl_MouseClickHandler_9()
		{
			if(onbutton!=null && ans[2]==null){
				onbutton.x=this.P4_Button6.x;
				onbutton.y=this.P4_Button6.y;
				ans[2]=onbutton;
				onbutton=null;
			}else if(onbutton==null && ans[2]!=null){
				onbutton=ans[2];
				ans[2]=null;
			}
		}
		
		function lastcheck(){
			if(ans[0]==that.P4_Button1 && ans[1]==that.P4_Button2 && ans[2]==that.P4_Button3){
				clearInterval(interv);
				alert("WOW!!! you are RIGHT!!!")
				that.gotoAndStop(4);
			}
		}
		var interv=setInterval(() => {lastcheck()}, 1000);
	}
	this.frame_4 = function() {
		this.stop();
		
		var _this = this;
		/*
		单击指定元件实例时将执行相应函数。
		*/
		_this.T.on('click', function(){
		
		/*
		通过更新元件实例的旋转属性使其旋转指定度数。
		要顺时针旋转元件实例计数器，请输入负数。
		*/
		_this.T.rotation+=30;
		_this.T.scaleX=10;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// 图层_1
	this.START_Button = new lib.START_Button();
	this.START_Button.name = "START_Button";
	this.START_Button.setTransform(508,540.85,1,1,0,0,0,0,-75);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(40,150,0.5,0.5);

	this.P2_Next = new lib.P2_Next();
	this.P2_Next.name = "P2_Next";
	this.P2_Next.setTransform(512,351.85,1,1,0,0,0,0,-223.9);

	this.P3_Next = new lib.P3_Next();
	this.P3_Next.name = "P3_Next";
	this.P3_Next.setTransform(908.2,53.45,1,1,0,0,0,0,-30);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(176.95,125.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(12.75,329.55,0.5,0.5);

	this.P4_Button6 = new lib.P4_Button6();
	this.P4_Button6.name = "P4_Button6";
	this.P4_Button6.setTransform(459.65,300.4,1,1,0,0,0,0,-30);

	this.P4_Button5 = new lib.P4_Button5();
	this.P4_Button5.name = "P4_Button5";
	this.P4_Button5.setTransform(410.75,240.4,1,1,0,0,0,0,-30);

	this.P4_Button4 = new lib.P4_Button4();
	this.P4_Button4.name = "P4_Button4";
	this.P4_Button4.setTransform(471.7,180.4,1,1,0,0,0,0,-30);

	this.P4_Button3 = new lib.P4_Button3();
	this.P4_Button3.name = "P4_Button3";
	this.P4_Button3.setTransform(840.95,544.65,1,1,0,0,0,0,-35);

	this.P4_Button2 = new lib.P4_Button2();
	this.P4_Button2.name = "P4_Button2";
	this.P4_Button2.setTransform(512.8,544.65,1,1,0,0,0,0,-35);

	this.P4_Button1 = new lib.P4_Button1();
	this.P4_Button1.name = "P4_Button1";
	this.P4_Button1.setTransform(192.45,544.65,1,1,0,0,0,0,-35);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(118.95,150.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(12.75,430.1,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(276.55,238.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.START_Button}]}).to({state:[{t:this.P2_Next}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.P3_Next}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.P4_Button1},{t:this.P4_Button2},{t:this.P4_Button3},{t:this.P4_Button4},{t:this.P4_Button5},{t:this.P4_Button6}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

	// BG
	this.instance_7 = new lib.EC_BG();
	this.instance_7.setTransform(0,0,1.28,0.96);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,552,384);
// library properties:
lib.properties = {
	id: '22DAE0925A89E74383F39F7D009DB9DD',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FAEDBA",
	opacity: 1.00,
	manifest: [
		{src:"images/StartLevel_atlas_1.png", id:"StartLevel_atlas_1"},
		{src:"images/StartLevel_atlas_2.png", id:"StartLevel_atlas_2"},
		{src:"images/StartLevel_atlas_3.png", id:"StartLevel_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['22DAE0925A89E74383F39F7D009DB9DD'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;