// instance audio
var audio = new Audio();
audio.src = './audio/lettre1850.mp3';
audio.controls = true;
audio.loop = true;
audio.autoplay = false;
audio.crossOrigin = "anonymous";
audio.volume=0.3;
// variable d'analyse
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
// initialisation a l'apuie boutton lancer
var lance = document.querySelector('#lance');
var zone = document.querySelector('#analyser_render');
zone.style.display = "none";
// frameLooper() audio fréquence
function frameLooper(){
	window.requestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0, 0, canvas.width, canvas.height); // réactualise en e vidant le canvas
	ctx.fillStyle = '#FFFFFF'; // couleurs des bars
	bars = 100;
	for (var i = 0; i < bars; i++) {
		bar_x = i * 3;
		bar_width = 2;
		bar_height = -(fbc_array[i] / 2);
		//  fillRect( x, y, width, height ) // Les param des bars
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
	}
}
