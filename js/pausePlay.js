$defil = $('.marquee:eq(0)');
$('.toggleButton:eq(0)').on('click', function() {
//initialisation au clique
    $defil.addClass('defilementVertical');
    $defil.addClass('playDefil');
    $defil.addClass('arretDefil');

// lecture du spectrogramme
    zone.style.display = "";
    audio.play();
    document.getElementById('audio_box').appendChild(audio);
  	context = new AudioContext(); // AudioContext object instance
  	analyser = context.createAnalyser(); // AnalyserNode method
  	canvas = document.getElementById('analyser_render');
  	ctx = canvas.getContext('2d');
  	// graph
  	source = context.createMediaElementSource(audio);
  	source.connect(analyser);
  	analyser.connect(context.destination);
  	frameLooper();


  if($(this).html() === 'Lecture')
  {
    $(this).html('Pause');
    $defil.removeClass('arretDefil');
    $defil.addClass('playDefil');
    audio.play();
  } else {
    $(this).html('Lecture');
    $defil.removeClass('playDefil');
    $defil.addClass('arretDefil');
    audio.pause();

  }
});
