$defil = $('.marquee:eq(0)');
$('.toggleButton:eq(0)').on('click', function() {
    $defil.addClass('defilementVertical');
    $defil.addClass('playDefil');
    $defil.addClass('arretDefil');
  if($(this).html() === 'Play')
  {
    $(this).html('Pause');
    $defil.removeClass('arretDefil');
    $defil.addClass('playDefil');
    audio.play();
  } else {
    $(this).html('Play');
    $defil.removeClass('playDefil');
    $defil.addClass('arretDefil');
    audio.pause();

  }
});
